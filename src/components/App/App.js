import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MainPageWorksList from '../MainPageWorksList/MainPageWorksList'
import MainPageWorkPreview from '../MainPageWorkPreview/MainPageWorkPreview'
import Footer from '../Footer/Footer'
import './App.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutProject from '../AboutProject/AboutProject'
import AboutTeam from '../AboutTeam/AboutTeam'

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
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
          <AboutProject />
        }>
        </Route>
        <Route exact path='/about-team' element={
          <AboutTeam />
        }>
        </Route>
      </Routes>
      {location.pathname !== '/about-team' && <Footer />}
    </>
  );
}

export default App;
