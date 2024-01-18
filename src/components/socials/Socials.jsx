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
        <AnchorLink>
          <LuInstagram href='https://www.instagram.com/aero.artz/' className='insta' />
        </AnchorLink>

        <AnchorLink>
          <CiYoutube href='https://www.youtube.com/channel/UCXC-_XlmDYSca3cOYCauWxw' className='yt'/>
        </AnchorLink>

        <AnchorLink>
          <FaGithub href='https://github.com/AeroArtz' className='git' />
        </AnchorLink>

        <AnchorLink>
          <FaXTwitter href='https://twitter.com/AbdulIkram12228' className='twitter'/>
        </AnchorLink>

    </div>
  )
}
