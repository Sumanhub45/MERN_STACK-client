import React from 'react';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/Signup";
import LogIn from "./components/Login";
import {Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={LogIn} />
            </Switch>
        </>
    )
}

export default App;