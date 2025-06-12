import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/AkshatNeolia' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://leetcode.com/u/AkshatNeolia24/' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiLeetcode />
            </a>

            <a href='https://www.hackerrank.com/profile/an1752' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHackerrank />
            </a>

            <a href='https://www.linkedin.com/in/akshat-neolia-5582a3250/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
        </div>
    );
};

export default HeaderSocials;
