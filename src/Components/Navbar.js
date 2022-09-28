import './Navbar.css'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const navRef = useRef()
    const showNavbar = ()=>{
            navRef.current.classList.toggle('responsive_nav')
    }

    return(
        <div>
            <ul className='list' ref={navRef}>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="/#">CONTACT</a></li>
                <li><a href="/#">PORTFOLIO</a></li>
                <li><a href="/#">SERVICES</a></li>
                <li><a href="/#">COURSES</a></li>
                <button className='nav-btn1 nav-close-btn' onClick={showNavbar}><FaTimes></FaTimes></button>
            </ul>
            <button className='nav-btn2' onClick={showNavbar}><FaBars></FaBars></button>
        </div>
    )
}

export default Navbar




