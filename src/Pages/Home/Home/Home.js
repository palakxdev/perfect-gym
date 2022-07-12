import React from 'react';
import About from '../../About/About';
import Register from '../../Login/Register/Register';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <div>
                <h2 className='text-center mt-5'>JOIN WITH US</h2>
                <div className="y-line mx-auto mb-5"></div>
            </div>
            <Register></Register>
        </>
    );
};

export default Home;