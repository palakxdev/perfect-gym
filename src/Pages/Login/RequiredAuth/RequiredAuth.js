import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center m-5 p-5'>
                <Loading></Loading>
                <p className='text-primary'>Loading...</p>
            </div>
        );
    }

    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAuth;