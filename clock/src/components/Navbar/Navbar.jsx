import React from 'react'
import { Link } from 'react-router-dom'
import clock from '../../assets/clock.png'
import  './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className='Navbar'>
            <div>
                <img src={clock} alt=""></img>
            </div>
            <div className='Link'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
