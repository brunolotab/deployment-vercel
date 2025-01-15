import React from 'react'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <div style={{margin:'1rem', display:'flex', gap:'1rem'}}>
            <Link to='/' element={<Home/>}>home</Link>
            <Link to='/favourites' element={<Favorites/>}>favorites</Link>
            {/* <NavLink to='/' element={<Home/>}>home</NavLink>
            <NavLink to='/favourites' element={<Favorites/>}>favorites</NavLink> */}
        </div>
    </>
  )
}

export default NavBar