import React from 'react'

import './App.css'
// import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/Navlink'
import { MovieProvider } from './contexts/MovieContext'

function App() {

  return (
    <MovieProvider>
    <main>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/favourites' element = {<Favorites/>} />
      </Routes>
    </main>
      
    </MovieProvider>
  )
}


export default App
