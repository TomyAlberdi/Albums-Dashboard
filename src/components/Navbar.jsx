import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
const Navbar = () => {

    const navigate = useNavigate()

    const scrollTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <header className='Navbar'>
            <div className="func">
                <section className="goTop" onClick={scrollTop}>
                    <div className="text">
                        <span>Go</span>
                        <span>To</span>
                        <span>Top</span>
                    </div>
                    <i className="fa-solid fa-chevron-up"></i>
                </section>
                <section className="goBack" onClick={() => {
                    navigate(-1)
                }}>
                    <div className="text">
                        <span>Go</span>
                        <span>Back</span>
                    </div>
                    <i className="fa-solid fa-chevron-left"></i>
                </section>
            </div>
            <div className='iconContainer'>
                <Link to={'http://tomas-alberdi.com'} target={'_blank'}><img src="/Albums-Dashboard/favicon.ico" alt="Project Icon" /></Link>
            </div>
        </header>
    )
}

export default Navbar;
