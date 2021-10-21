import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Signup.css'
import { registerUser } from './../../../Store/authReducer';

export const Signup = () => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const signupUser = e => {
        e.preventDefault();

        if (!username || !name || !email || !password) {
            alert("Please fill all fields...");
        } else {
            const newUser = { _id: ~~(Math.random() * 10000000), username, name, email, password }
            dispatch(registerUser(newUser));
            history.push("/");
            setUsername("");
            setName("");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div className="signup">
            <form onSubmit={signupUser} className="signup__form">
                <h2 className="signup__heading">Signup Form</h2>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />

                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button className="btnSignup">Signup</button>
                <Link to="/">Already have an account? Login</Link>
            </form>
        </div>
    )
}
