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
            <div id='services' className='mt-5 mb-5 container'>
                <h2 className='text-center'>MY SERVICES</h2>
                <div className="y-line mx-auto"></div>
                    <div className='services-container d-flex justify-content-center flex-wrap mt-5'>
                        {
                            services.map(service => <Service
                                service={service}
                                key={service.id}
                            ></Service>)
                        }
                    </div>
            </div>
        </>
    );
};

export default Services;