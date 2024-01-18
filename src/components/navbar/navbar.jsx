import { React, useState } from 'react';
import './navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileNav } from '../mobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, SetOpenMenu] = useState(false);
  const toggleMenu = () => {
    SetOpenMenu(!openMenu);
  }
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <div className='nav-wrapper'>
      <div className='nav-content'> 
        <ul>
          <li>
            <AnchorLink href='#hero' className='menu-item'>Home</AnchorLink>
          </li>

          <li>
            <AnchorLink href='#projects'className='menu-item'>Projects</AnchorLink>
           
          </li>

          <li>
            <AnchorLink href='#about'className='menu-item'>About</AnchorLink>
          </li>

          <li>
            <AnchorLink className='menu-item'>Contact us</AnchorLink>
          </li>

        </ul>
        <button className='menu-btn' onClick={toggleMenu}>
          <span
            style={{fontSize: '1.8rem'}}
          >
            { openMenu ? <div></div> :
            <RxHamburgerMenu />
            }
          </span>
        </button>
      </div>
    </div>
    </>
  )
}

export default Navbar
