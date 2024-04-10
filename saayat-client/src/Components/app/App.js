import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import SignIn from '../sign in/SignIn.js';
import SignUp from '../sign up/SignUp.js';
import './App.css';


export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />}/>
          <Route exact path="/login" element={<SignIn />}/>
          <Route exact path="/register" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

