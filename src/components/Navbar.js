import React, {useState} from 'react'
// import React from 'react'
import styles from './Navbar.module.css'
import {
    AiOutlineUser,
    AiOutlineSearch,
    AiOutlineMenu,
    AiOutlineClose,
  } from 'react-icons/ai';
import Logo from '../images/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
        <img src={Logo} />
        <nav>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
            <li>
                <a href='/'>Learn More</a>
            </li>
            <li>
                <a href='/'>Log In</a>
            </li>
            <li>
                <a href='/'>Sign Up</a>
            </li>
            <li>
                <AiOutlineSearch size={25} style={{marginTop: '6px'}} />
            </li>
            <li>
                <AiOutlineUser size={25} style={{marginTop: '6px'}}  />
            </li>
            </ul>
        </nav>
        <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} /> }
            
        </div>
    </header>
  )
}

export default Navbar
