import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='navbar'>
            <p className='logo'>Dashboard </p>
            <p className='link'>Intensity</p>
            <p className='link'>Likelihood</p>
            <p className='link'>Relevance</p>
            <p className='link'>Year</p>
            <p className='link'>Country</p>
            <p className='link'>Topics</p>
            <p className='link'>Region</p>
            <p className='link'>city </p>
        </div>
    )
}

export default Navbar