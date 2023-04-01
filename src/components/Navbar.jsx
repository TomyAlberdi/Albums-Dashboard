import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
    return (
        <header className='Navbar'>
            <div className="links">
                <div className="navLinks">
                    <Link to={'/Albums-Dashboard/'}>Albums</Link>
                </div>
                <div className="navLinks">
                    <Link to={'/Albums-Dashboard/Artists'}>Artists</Link>
                </div>
                <div className="navLinks">
                    <Link to={'/Albums-Dashboard/Tracks'}>Tracks</Link>
                </div>
            </div>
            <div className='iconContainer'>
                <Link to={'http://tomas-alberdi.com'} target={'_blank'}><img src="/favicon.ico" alt="Project Icon" /></Link>
            </div>
        </header>
    )
}

export default Navbar