import React from 'react';
import './styles/Home.css';
import { Icon, InlineIcon } from '@iconify/react';
import githubOutlineFill from '@iconify-icons/akar-icons/github-outline-fill';
import instagramFill from '@iconify-icons/akar-icons/instagram-fill';
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import dribbbleFill from '@iconify-icons/akar-icons/dribbble-fill';

function Home(prop) {

    const linkedIn = () => {
        window.location.href = "https://www.linkedin.com/in/harsh-misra-295909202/";
    }
    const insta = () => {
        window.location.href="https://www.instagram.com/misra.harsh11/";
    }
    const twitter = () => {
        window.location.href = "https://twitter.com/fallen_Ecstasy";
    }
    const dribbble = () => {
        window.location.href = "https://dribbble.com/fallenEcstasy";
    }
    const github = () => {
        window.location.href="https://github.com/fallen-ecstasy";
    }




    if(prop.view==="Mobile"){
        return(
            <div className="Home-mobile">
            <div className="pre-Heading-m">Hi, my name is</div>
            <div className="Heading-m"><span className="colorize-a">H</span>arsh <span className="colorize-a">M</span>isra</div>
            <div className="Heading-m two-m">I build things for Web.</div>
            <div className="about-me-m">I'm a Aspiring software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm an Student at PSIT,Kanpur focused on building accessible, human-centered products.</div>


            <div className="get-in-touch">GET IN TOUCH</div>
            <div className="Social-box">
            <button onClick={github}><Icon className="Social-btn" icon={githubOutlineFill} inline={true} /></button>
            <button onClick={insta}><Icon className="Social-btn" icon={instagramFill} inline={true} /></button>
            <button onClick={twitter}><Icon className="Social-btn" icon={twitterFill} inline={true} /></button>
            <button onClick={linkedIn}><Icon className="Social-btn" icon={linkedinFill} inline={true} /></button>
            <button onClick={dribbble}><Icon className="Social-btn" icon={dribbbleFill} inline={true} /></button>
            </div>
        </div>
        )
    }else{
    return (
        <div className="Home">
            <div className="pre-Heading">Hi, my name is</div>
            <div className="Heading"><span className="colorize-a">H</span>arsh <span className="colorize-a"> M</span>isra</div>
            <div className="Heading two">I build things for Web.</div>
            <div className="about-me">I'm a Aspiring software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm an Student at PSIT,Kanpur focused on building accessible, human-centered products.</div>


            <div className="get-in-touch">GET IN TOUCH</div>
            <div className="Social-box">
            <Icon onClick={github} className="Social-btn" icon={githubOutlineFill} inline={true} />
            <Icon onClick={insta} className="Social-btn" icon={instagramFill} inline={true} />
            <Icon onClick={twitter} className="Social-btn" icon={twitterFill} inline={true} />
            <Icon onClick={linkedIn} className="Social-btn" icon={linkedinFill} inline={true} />
            <Icon onClick={dribbble} className="Social-btn" icon={dribbbleFill} inline={true} />
            </div>
        </div>
    )
    }
}

export default Home
