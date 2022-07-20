import React from 'react';
import master from '../../images/gym-master.png';
import './About.css'

const About = () => {
    return (
        <>
            <div className='about-container d-flex align-items-center p-4'>
                <img width={500} src={master} alt="" />
                <div className='ms-4'>
                    <h2 className='mb-3'> <span className='d-block mb-1'>ABOUT</span> PERFECT GYM CENTER</h2>
                    <div className='about-hr'></div>
                    <p className='mt-3 lh-base'>Looking for Best Gym In Us? Get All Results from Across the Web. 99% Match on Best Gym In Us. Always Facts. Privacy Friendly. Unlimited Access. Results & Answers. The Best Resources. Types: Best Results, Explore Now, New Sources, Best in Search.
                        The Perfect Gym Center is a health, recreational, and social facility geared towards exercise, sports, and other physical activities. It may be a for-profit commercial facility or a community- or institutionally-supported center.</p>
                </div>
            </div>
        </>
    );
};

export default About;