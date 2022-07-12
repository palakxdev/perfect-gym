import React from 'react';
import './Banner.css';
import man from '../../../images/banner-man.png'

const Banner = () => {
    return (
        <>
        <div className='banner-bg container-fluid'>
            <div className='d-flex align-items-center header-section'>
                <div className='text-white ms-5 me-4 header-content'>
                    <h3 className='mb-4'>PERFECT GYM</h3>
                    <h1 className='mb-4'>LETS GET FIT GO PERFECT!!</ h1>
                    <p className='mb-4 lh-base'>Working out daily can lead to injuries, fatigue, and burnout. All of these things can cause you to abandon your fitness program altogether. Start slowly, and gradually increase the duration and intensity of any new exercise routine. Be aware of your body.</p>
                    <button className='banner-button rounded-pill px-4 py-2 text-white'>Book Now</button>
                </div>
                <img className='w-10' width={'100%'} src={man} alt="" />
            </div>
        </div>
        <div className='h-line mx-auto mt-2'></div>
        </>
    );
};

export default Banner;