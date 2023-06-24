
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserChecked } from './authSlice'
import { Navigate } from 'react-router-dom';

export function Protected({children}){
    const user = useSelector(selectUserChecked);
    if(!user){
        return <Navigate to="/login" replace={true}></Navigate>
    }
    return children;
}