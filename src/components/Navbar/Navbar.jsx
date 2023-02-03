import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../img/svg/logo.svg';
import iconMenu from '../../img/svg/icon-menu.svg';
import iconClose from '../../img/svg/icon-menu-close.svg';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='navbar'>
            <div className={openMenu?"bg-black":"bg-black menu-close"}></div>
            <div className="logo">
                <img src={logo} alt="" loading='lazy' />
            </div>
            <div className={openMenu?"menu":"menu  menu-close"}>
                <img src={iconClose} alt="" className="icon-close" onClick={()=>setOpenMenu(!openMenu)}/>
                <div className="item">Home</div>
                <div className="item">New</div>
                <div className="item">Popular</div>
                <div className="item">Trending</div>
                <div className="item">Categories</div>
            </div>
            <img src={iconMenu} alt="" className='icon-menu' onClick={()=>setOpenMenu(!openMenu)}/>
        </div>
    )
}
export default Navbar