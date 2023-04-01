import React from 'react'
 
const Navbar = () => {
    return (
        <header className='Navbar'>
            <section className="goTop">
                <div className="text">
                    <span>Go</span>
                    <span>To</span>
                    <span>Top</span>
                </div>
                <i className="fa-solid fa-chevron-up"></i>
            </section>
            <div className='iconContainer'>
                <a href='http://tomas-alberdi.com' target={'_blank'}><img src="/favicon.ico" alt="Project Icon" /></a>
            </div>
        </header>
    )
}

export default Navbar