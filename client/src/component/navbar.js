import React from 'react';
import logo from '../images/logo.png';
import './navbar.css';
import { useAuth } from "./auth";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <nav>
        {!auth.user && <NavLink to='/'><button className='but'>Home</button></NavLink>}
        {auth.user && <NavLink to='/main'><button className='but'> Problems</button></NavLink>}
        {!auth.user && <NavLink to='/signup'><button className='but'>SignUp</button></NavLink>}
        {!auth.user && <NavLink to='/login'><button className='but'>LogIn</button></NavLink>}
        {auth.user && <NavLink to='#'><button className='but'>{auth.Name}</button></NavLink>}
        {auth.user && <NavLink to='/login'><button className='but' onClick={handleLogout}>LogOut</button></NavLink>}
      </nav>
    </div>
  );
}

export default Navbar;