import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-head">
                <h1>Recipe <span className='navspan'>App</span></h1>
            </div>
            <div className="nav-links">
                <ul>
                    <Link to='/'>
                        <li>Home
                        </li>
                    </Link>
                    <Link to='/catagories'>
                        <li>Catagories
                        </li>
                    </Link>
                    <Link to='/random'>
                        <li>Random
                        </li>
                    </Link>



                </ul>
            </div>
        </div>
    )
}