import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div className='mx-auto'>
            <Spinner className='spinner-bg' animation="border"/>
        </div>
    );
};

export default Loading;