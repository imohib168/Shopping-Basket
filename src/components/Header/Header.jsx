import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import { logout } from './../../Store/authReducer';

export const Header = () => {

    const authStatus = useSelector(state => state.authReducer.auth);
    const dispatch = useDispatch();

    const handleLogout = e => {
        dispatch(logout())
    }

    return (
        <>
            <div className="header">
                <div className="logo">
                    <h2>Shopping Basket</h2>
                </div>
                {
                    authStatus ? (
                        <ul className="navLinks">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/cart">Cart</Link>
                            </li>
                            {
                                authStatus ? (
                                    <li>
                                        <Link onClick={handleLogout} to="/">Logout</Link>
                                    </li>
                                ) : (
                                    <li>
                                        <Link to="/register">Signup</Link>
                                    </li>
                                )
                            }
                        </ul>
                    ) : (
                        <ul className="navLinks">
                            <li>
                                <Link to="/register">Signup</Link>
                            </li>
                            <li>
                                <Link to="/">Login</Link>
                            </li>
                        </ul>
                    )
                }
            </div>
        </>
    )
}
