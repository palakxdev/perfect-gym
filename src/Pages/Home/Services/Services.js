import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <section id="services" className="mt-5 mb-5">
            <h2 className="text-center">MY SERVICES</h2>
            <div className="y-line mx-auto"></div>
            <div className="services container mt-5">
                {services.map((service) => (
                    <Service service={service} key={service.id}></Service>
                ))}
            </div>
        </section>
    );
};

export default Services;
