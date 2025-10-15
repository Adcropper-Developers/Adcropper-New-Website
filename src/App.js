import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookDemo from './pages/BookDemo'
import Faq from './pages/Faq'
import Loader from './Loader';
import './styles/common.css';
import './styles/style.css';
import useTheme from './hooks/useTheme'

const THEME_KEY = "site-theme"; // "light" | "dark" | "system"

export function getSystemPrefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  document.title = 'Adcropper';
  const {theme, setTheme} = useTheme();


  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      <Routes>
        <Route path='/' exact={true} element={
          <Home isLoading={isLoading} setIsLoading={setIsLoading} theme={theme} setTheme={setTheme} />
        }
        ></Route>
        <Route path='/book-demo' element={
          <BookDemo isLoading={isLoading} setIsLoading={setIsLoading} theme={theme} setTheme={setTheme} />
        }>
        </Route>
        <Route path='/faq' element={
          <Faq isLoading={isLoading} setIsLoading={setIsLoading} theme={theme} setTheme={setTheme} />
        }>
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
