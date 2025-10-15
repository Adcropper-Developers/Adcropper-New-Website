// src/hooks/useTheme.js
import { useEffect, useState, useCallback } from "react";

const THEME_KEY = "site-theme"; // "light" | "dark" | "system"

export function getSystemPrefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function useTheme() {
  const [theme, setThemeState] = useState(() => {
    // 1. localStorage tercihi var mı?
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark" || saved === "system") return saved;
    } catch (e) {}
    // 2. yoksa cihaz tercihini al
    return getSystemPrefersDark() ? "dark" : "light";
  });

  // uygulamaya tema uygula
  const applyTheme = useCallback((t) => {
    const root = document.documentElement;
    // Eğer "system" ise cihazı kontrol et
    const resolved = t === "system" ? (getSystemPrefersDark() ? "dark" : "light") : t;
    if (resolved === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }, []);

  // tema değişimini sakla ve uygula
  useEffect(() => {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    applyTheme(theme);
  }, [theme, applyTheme]);

  // system preference değişikliklerini dinle (kullanıcı OS tema değiştirirse)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      // eğer localStorage'da "system" seçiliyse, güncelle
      try {
        const stored = localStorage.getItem(THEME_KEY);
        if (!stored || stored === "system") {
          applyTheme("system");
          // tema state'ini de güncelle (isteğe bağlı)
          // setThemeState("system"); // eğer state'te system görmek istemezsen bunu pas geçebilirsin
        }
      } catch (e) {}
    };
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
    } else {
      mq.addListener(handler);
    }
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, [applyTheme]);

  // dışarı verilecek API: değiştirici fonksiyon
  const setTheme = useCallback((t) => {
    // t: "light" | "dark" | "system"
    setThemeState(t);
  }, []);

  return { theme, setTheme };
}
