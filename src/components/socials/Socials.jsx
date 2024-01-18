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
          <LuInstagram href='' className='insta' />
        </AnchorLink>

        <AnchorLink>
          <CiYoutube href='' className='yt'/>
        </AnchorLink>

        <AnchorLink>
          <FaGithub href='' className='git' />
        </AnchorLink>

        <AnchorLink>
          <FaXTwitter href='' className='twitter'/>
        </AnchorLink>

    </div>
  )
}
