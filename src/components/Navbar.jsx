import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {

    const scrollTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <header className='Navbar'>
            <section className="goTop" onClick={scrollTop}>
                <div className="text">
                    <span>Go</span>
                    <span>To</span>
                    <span>Top</span>
                </div>
                <i className="fa-solid fa-chevron-up"></i>
            </section>
            <div className='iconContainer'>
                <Link to={'http://tomas-alberdi.com'} target={'_blank'}><img src="/Albums-Dashboard/favicon.ico" alt="Project Icon" /></Link>
            </div>
        </header>
    )
}

export default Navbar
