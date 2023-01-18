import React from 'react';
import './Banner.css';
import banner1 from '../../../images/banner-1.png';
import banner2 from '../../../images/banner-2.png';
import banner3 from '../../../images/banner-3.png';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <>
            <Carousel className="banner-bg">
                {/*----------------------- CAROUSEL ITEM - 1 ----------------------*/}
                <Carousel.Item>
                    <div className="container d-flex align-items-center header-section pt-lg-5">
                        <div className="text-white header-content mt-lg-5">
                            <h3 className="mb-lg-4">PERFECT GYM</h3>
                            <h1 className="mb-lg-4">
                                LETS GET FIT GO PERFECT!!
                            </h1>
                            <p className="mb-lg-4 lh-base">
                                Working out daily can lead to injuries, fatigue,
                                and burnout. All of these things can cause you
                                to abandon your fitness program altogether.
                                Start slowly, and gradually increase the
                                duration of any new exercise routine.
                            </p>
                            <Link to="/register">
                                <button className="banner-button rounded-pill px-4 py-2 text-white">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                        <img
                            className="mt-lg-5 p-lg-4 p-2 carousel-img img-fluid"
                            src={banner1}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                {/*----------------------- CAROUSEL ITEM - 2 ----------------------*/}
                <Carousel.Item>
                    <div className="container d-flex align-items-center header-section pt-lg-5">
                        <div className="text-white header-content mt-lg-5">
                            <h3 className="mb-lg-4">PERFECT GYM</h3>
                            <h1 className="mb-lg-4">
                                LETS GET FIT GO PERFECT!!
                            </h1>
                            <p className="mb-lg-4 lh-base">
                                Working out daily can lead to injuries, fatigue,
                                and burnout. All of these things can cause you
                                to abandon your fitness program altogether.
                                Start slowly, and gradually increase the
                                duration of any new exercise routine.
                            </p>
                            <Link to="/register">
                                <button className="banner-button rounded-pill px-4 py-2 text-white">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                        <img
                            className="mt-lg-5 p-lg-4 p-2 carousel-img img-fluid"
                            src={banner2}
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>
                {/*----------------------- CAROUSEL ITEM - 3 ----------------------*/}
                <Carousel.Item>
                    <div className="container d-flex align-items-center header-section pt-lg-5">
                        <div className="text-white header-content mt-lg-5">
                            <h3 className="mb-lg-4">PERFECT GYM</h3>
                            <h1 className="mb-lg-4">
                                LETS GET FIT GO PERFECT!!
                            </h1>
                            <p className="mb-lg-4 lh-base">
                                Working out daily can lead to injuries, fatigue,
                                and burnout. All of these things can cause you
                                to abandon your fitness program altogether.
                                Start slowly, and gradually increase the
                                duration of any new exercise routine.
                            </p>
                            <Link to="/register">
                                <button className="banner-button rounded-pill px-4 py-2 text-white">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                        <img
                            className="mt-lg-5 p-lg-4 p-2 carousel-img img-fluid"
                            src={banner3}
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
                {/*----------------------- CAROUSEL ITEM - 3 ----------------------*/}
            </Carousel>
            <div className="h-line mx-auto mt-2"></div>
        </>
    );
};

export default Banner;
