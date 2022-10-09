import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {UserContext} from "../App";

const Logout = () => {
    // promises 
    const {  dispatch } = useContext(UserContext);
    const navigate = useNavigate();

        
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/logout`, {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then((res) => {
            dispatch({ type: 'USER', payload: false });
            navigate('/login', { replace: true });
            console.log('after navigate')
            if (res.status!=200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <>
           <h1>Logout ka page</h1> 
        </>
    )
}

export default Logout
