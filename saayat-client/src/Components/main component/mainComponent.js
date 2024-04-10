import React, { Fragment, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserContext, { useUserContext } from '../user cotext/userContext';
import SignIn from '../sign in/SignIn';
import SignUp from '../sign up/SignUp';



export default function MainComponent() {

    const history = useNavigate();

    async function checkCredetialFun(credetialForm) {

    }

    async function SignUpfun() {

    }
    return (
        <Fragment>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <div>
                            <SignIn checkCredentialsprop={checkCredetialFun} />
                            <h3>Hi</h3>
                        </div>
                    }
                />
                <Route
                    exact
                    path="/signUp"
                    element={
                        <SignUp signUpProp={SignUpfun} />
                    }
                />
            </Routes>
        </Fragment>
    )
}