import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
   return (
      <div className='navbar'>
         <div className='navbar__logo'>
            <Link to='/'>
               <img src={logo} alt='logo' />
            </Link>
         </div>

         <div className='navbar__links'>
            <nav>
               <ul>
                  <li>
                     <a href='#menu'>Menú</a>
                  </li>
                  <li>
                     <a href='#promociones'>Promociones</a>
                  </li>
                  <li>
                     <a href='#acompañamientos'>Acompañamientos</a>
                  </li>
                  <Link to='/carrito'>
                     Carrito
                  </Link>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Navbar