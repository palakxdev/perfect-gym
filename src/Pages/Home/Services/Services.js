import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div id='services' className='services-container mt-4 mb-4 container'>
                <h2 className='text-center'>OUR SERVICES</h2>
                <div className="y-line mx-auto"></div>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                        service = {service}
                        key={service.id}
                        ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;