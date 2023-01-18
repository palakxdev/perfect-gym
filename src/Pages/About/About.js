import React from 'react';
import master from '../../images/gym-master.png';
import './About.css';

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="container d-flex align-items-center p-4">
                    <img className="img-fluid" src={master} alt="" />
                    <div className="ms-4">
                        <h2 className="mb-3">
                            {' '}
                            <span className="d-block mb-1">ABOUT ME</span>{' '}
                            PERFECT GYM CENTER
                        </h2>
                        <div className="about-hr"></div>
                        <p className="mt-3 lh-base">
                            Hey, I'm Brian Lee. I'm a gym trainer. Are you
                            looking for Best Gym In US? Get All Results from
                            Across the Web. 99% Match on Best Gym In Us. Always
                            Facts. Privacy Friendly. Unlimited Access. Results &
                            Answers. The Best Resources. Types: Best Results,
                            Explore Now, New Sources, Best in Search. The
                            Perfect Gym Center is a health, recreational, and
                            social facility geared towards exercise, sports, and
                            other physical activities. It may be a for-profit
                            commercial facility or a community- or
                            institutionally-supported center.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
