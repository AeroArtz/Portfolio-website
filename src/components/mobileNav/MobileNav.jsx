import React from 'react';
import './mobileNav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
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
            </div>

        </div>
    </>
  )
  
}
