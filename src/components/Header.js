import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";

import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/user";

const Header = (props) => {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(logout())
        
    }
    
    return <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
        {user.isLogged ? (
          <>
            <NavLink to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle" />
                {user.firstName}
            </NavLink>
            <NavLink to="/" className="main-nav-item" onClick={() => {handleLogout()}}>
                <i className="fa fa-sign-out" />
                Sign Out
            </NavLink>
          </>
        ) : (
            <NavLink to="/login" className="main-nav-item">
                <i className="fa fa-user-circle" />
                Sign In
            </NavLink>
        )}
        </div>
    </nav>
}

export default Header