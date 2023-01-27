import { useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import MainPageWorksList from '../MainPageWorksList/MainPageWorksList'
import MainPageWorkPreview from '../MainPageWorkPreview/MainPageWorkPreview'
import './App.scss'
import { Route, Routes, useLocation } from "react-router-dom"
import AboutProject from "../AboutProject/AboutProject"
import AboutTeam from "../AboutTeam/AboutTeam"

function App() {
  const location = useLocation();
  const inputRef = useRef(null);
  const inputFocus = () => inputRef.current.focus();

  return (
    <div className='page'>
      <Header
        inputRef={inputRef}
      />
      <Routes>
        <Route exact path='/' element={
          <Main />
        }>
        </Route>
        <Route exact path='/works-list' element={
          <MainPageWorksList />
        }>
        </Route>
        <Route exact path='/work-preview' element={
          <MainPageWorkPreview />
        }>
        </Route>
        <Route exact path='/about-project' element={
          <AboutProject
            inputFocus={inputFocus}
          />
        }>
        </Route>
        <Route exact path='/about-team' element={
          <AboutTeam />
        }>
        </Route>
      </Routes>
      { location.pathname !== '/about-team' && <Footer /> }
    </div>
  );
}

export default App;
