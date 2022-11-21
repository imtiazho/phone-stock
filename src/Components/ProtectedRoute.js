import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    
    if (loading) {
        return <p style={{"color": "#fff"}}>Loading...</p>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};

export default ProtectedRoute;