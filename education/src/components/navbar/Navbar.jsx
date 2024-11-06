import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenu =()=>[
  mobileMenu?setMobileMenu(false):setMobileMenu(true)
  ]

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        {/* Disable smooth scroll for other sections */}
        <li> <Link to="hero" smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li> <Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link> </li>
        <li> <Link to="about" smooth={true} offset={-150} duration={500}>About us</Link> </li>
        <li> <Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link> </li>
        <li> <Link to="testimonails" smooth={true} offset={-260}duration={500}>Testimonials</Link> </li>
        {/* Only enable smooth scroll for the Contact section */}
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar