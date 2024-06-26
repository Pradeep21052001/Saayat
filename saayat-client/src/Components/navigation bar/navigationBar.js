import React, {useState} from 'react';
import './navigationBar.css';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../user cotext/userContext';
// import { Typography } from '@mui/material';

export default function NavigationBar() {

  const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useUserContext();
  const history = useNavigate();
  const[searchText,setSearchText] = useState('');


  function searchTextchange(e) {
      setSearchText(e.target.value);
  }




//   function logoutClicked() {
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     localStorage.clear();
//     history.push('/signIn');
//   }

  return (
    <AppBar className='appBar'>
      <ToolBar className='toolBar'>
        <span className='saayat-logo'>
          <AgricultureIcon />
          <span className='saayat-text'>Saayat</span>
        </span>
        {!isLoggedIn ? (
          <div className='auth-buttons'>
            <Link to="/signIn">
              <button className='auth-button'>Log In</button>
            </Link>
            <Link to="/signUp">
              <button className='auth-button'>Sign Up</button>
            </Link>
          </div>
        ) : (
          <div className='auth-buttons'>
            <input className='searchBox' type="text" placeholder="Search" onChange={searchTextchange}/>
            <Link to="/">
              <button className='auth-button'>Home</button>
            </Link>
            {isAdmin && <Link to="/add-products">
              <button className='add-products'>Add Products</button>
            </Link>}
            <Link to="/">
              {/* <button className='auth-button' onClick={logoutClicked}>Log out</button> */}
              <button className='auth-button'>Log out</button>
            </Link>
          </div>
        )}
      </ToolBar>
    </AppBar>
  );
}
