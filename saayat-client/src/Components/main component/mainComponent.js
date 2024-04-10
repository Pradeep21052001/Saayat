import React, { Fragment, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserContext, { useUserContext } from '../user cotext/userContext';
import SignIn from '../sign in/SignIn';
import SignUp from '../sign up/SignUp';



export default function MainComponent() {

    const history = useNavigate();

    return (
        <Fragment>
            <Routes>
                <Route
                    exact path="/login" element={<SignIn />}
                />
                <Route
                    exact path="/login" element={<SignIn />}
                />
                <Route
                    exact path="/register" element={<SignUp />}
                />
            </Routes>
        </Fragment>
    )
}