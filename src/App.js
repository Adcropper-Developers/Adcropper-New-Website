import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import BookDemo from './BookDemo'
import Loader from './Loader';
import './styles/common.css';
import './styles/style.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);
  document.title = 'Adcropper';

  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      {/* <Routes>
        <Route path='/' exact={true} element={ */}
          <Home isLoading={isLoading} setIsLoading={setIsLoading} theme={theme} changeTheme={changeTheme} />
        {/* } */}
        {/* ></Route> */}
        {/* <Route path='/book-demo' element={ */}
          {/* <BookDemo isLoading={isLoading} setIsLoading={setIsLoading} theme={theme} changeTheme={changeTheme} /> */}
        {/* }> */}
        {/* </Route> */}
      {/* </Routes> */}
    </React.Fragment>
  )
}

export default App
