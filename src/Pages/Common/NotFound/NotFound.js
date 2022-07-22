import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../../images/notfound.png';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/register')
    }

    return (
        <div>
            <img className='w-100' src={notfound} alt="" />
            <p className='notfound-text text-center p-4' onClick={navigateToHome}>--Go To Home--</p>
        </div>
    );
};

export default NotFound;