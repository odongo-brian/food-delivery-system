import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import basket_icon from '../../assets/basket_icon.png'
const Navbar = () => {
    const[menu, setMenu] = useState('Home')

  return (
    <div className='navbar'>
      <img className='logo' src={logo}/>
      <ul className='navbar_menu'>
        <li onClick={()=>setMenu("Home")} className={menu==="Home" ? "active" : "" }>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
      </ul>

      <div className='navbar-right'>
        <img src={search_icon} />
        <div className='navbar-search-icon'>
            <img src={basket_icon} />
            <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>

    </div>
  )
}


export default Navbar
