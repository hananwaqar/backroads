import React , {useState} from 'react'

// import './navbar.css'

import {FaRProject} from 'react-icons/fa'
import {Link} from 'gatsby'
import styles from '../css/Navbar.module.css'
import {FaAlignRight} from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/newlogo_black.jpg'
export default function Navbar() {
    const [isOpen , setNav] = useState(false)

    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    return (
       <nav className={styles.navbar}>
       <div className={styles.navCenter}>
       <div className={styles.navHeader}>
       <img src={logo} alt="backroads logo" />
      <button type="button" className ={styles.logoBtn} onClick={
          toggleNav
      } >
          <FaAlignRight className={styles.logoIcon} />
      </button>
       </div>
  <ul className={isOpen ? `${styles.navLinks} 
  ${styles.showNav}` : `${styles.navLinks}` }>
      {links.map((item,index)=>{
          return (
              <li key={index} >
                  <Link to={item.path}>
           {item.text}
                  </Link>
              </li>
          )
      })}
  </ul>
  {socialIcons.map((item,index)=>{
      return (
          <a key={index} href={item.url} target="_blank">
        {item.icon}
          </a>
      )
  })}
       </div> 
       </nav>
    )
}
