import React from 'react';
import './styles/Home.css';
import { Icon, InlineIcon } from '@iconify/react';
import githubOutlineFill from '@iconify-icons/akar-icons/github-outline-fill';
import instagramFill from '@iconify-icons/akar-icons/instagram-fill';
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import dribbbleFill from '@iconify-icons/akar-icons/dribbble-fill';

function Home() {
    return (
        <div className="Home">
            <div className="pre-Heading">Hi, my name is</div>
            <div className="Heading">Harsh Misra</div>
            <div className="Heading two">I build things for Web.</div>
            <div className="about-me">I'm a Aspiring software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm an Student at PSIT,Kanpur focused on building accessible, human-centered products.</div>


            <div className="get-in-touch">GET IN TOUCH</div>
            <div className="Social-box">
            <Icon className="Social-btn" icon={githubOutlineFill} inline={true} />
            <Icon className="Social-btn" icon={instagramFill} inline={true} />
            <Icon className="Social-btn" icon={twitterFill} inline={true} />
            <Icon className="Social-btn" icon={linkedinFill} inline={true} />
            <Icon className="Social-btn" icon={dribbbleFill} inline={true} />
            </div>
        </div>
    )
}

export default Home
