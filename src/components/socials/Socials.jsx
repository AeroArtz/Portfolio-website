import React from 'react';
import { LuInstagram } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Socials.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';




export const Socials = () => {
  return (
    <div className='icons-container'>
        <a href='https://www.instagram.com/aero.artz/'>
          <LuInstagram className='insta' />
          </a>
        
          <a href='https://www.youtube.com/channel/UCXC-_XlmDYSca3cOYCauWxw'>
          <CiYoutube className='yt'/>
          </a>
       

        <a href='https://github.com/AeroArtz'>
          <FaGithub className='git' />
        </a>

        <a href='https://twitter.com/AbdulIkram12228'>
          <FaXTwitter className='twitter'/>
        </a>

    </div>
  )
}
