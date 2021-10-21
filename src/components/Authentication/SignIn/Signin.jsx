import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './SignIn.css'
import { useDispatch } from 'react-redux';
import { loginUser } from './../../../Store/authReducer';

export const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const signInUser = e => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please, fill all fields...");
        } else {
            const user = { email, password }
            dispatch(loginUser(user));
            history.push("/home");
        }

    }

    return (
        <div className="signin">
            <form onSubmit={signInUser} className="signin__form">
                <h2 className="signin__heading">Login Form</h2>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button className="btnSignin">Login</button>
                <Link to="/register">Don't have an account? Register</Link>
            </form>
        </div>
    )
}
