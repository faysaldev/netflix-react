import React, { useEffect, useState } from 'react'

function Nav() {

    const [showNav, setShowNav] = useState(false)
    
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        return ()=> window.removeEventListener('scroll' ,transitionNavBar)
    },[])

    return (
        <div className={`nav ${showNav && "navblack"}`}>
            <div className="nav__content">
            <img src="/img/Netflix-logo.png" className="netflix__logo" />

            <img src="/img/menuLogo.png" className="menu__logo" />
            </div>
        </div>
    )
}

export default Nav
