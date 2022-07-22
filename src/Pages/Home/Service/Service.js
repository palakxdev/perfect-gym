import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const service = ({ service }) => {
    const { name, img, description, price } = service;

    return (
        <>
            <div className="p-4 service-container m-4">
                <img className='mb-2' width={80} src={img} alt="" />
                <h4 className='text-center'>{name}</h4>
                <p className='text-center'>Price: ${price}</p>
                <p>{description}</p>
                <div className="text-center">
                    <Link to='/booknow'><button className='service-button rounded-pill px-4 py-2'>Book Now</button></Link>
                </div>
            </div>
        </>
    );
};

export default service;