import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <div className="header">
                <Link to='/'>
                    <h1>Portfolio</h1>
                </Link>
                <ul className={click ? 'nav-menu active ' :
                    'nav-menu'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>

                        <a href="#about">About</a>
                    </li>

                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>

                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div className="menu-animtn" onClick={handleClick}>
                    {
                        click ?
                            (<FaTimes size={20} style={{ color: '#000000' }} />)
                            : (<FaBars size={20} style={{ color: '#000000' }} />)
                    }



                </div>
            </div>


        </>
    )
}

export default Navbar