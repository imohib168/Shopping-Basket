import React from 'react';
// Import from React router dom
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// Import Components
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import { Signin } from './components/Authentication/SignIn/Signin';
import { Signup } from './components/Authentication/SignUp/Signup';
import { useSelector } from 'react-redux';

const App = () => {

    const authStatus = useSelector(state => state.authReducer.auth)

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/home" render={() => !authStatus ? (<Redirect to='/' />) : (<Home />)} />
                <Route exact path="/cart" render={() => !authStatus ? (<Redirect to='/' />) : (<Cart />)} />
                <Route exact path="/" render={() => authStatus ? (<Redirect to='/home' />) : (<Signin />)} />
                <Route exact path="/register" render={() => authStatus ? (<Redirect to='/home' />) : (<Signup />)} />
            </Switch>
        </Router>
    )
}

export default App
