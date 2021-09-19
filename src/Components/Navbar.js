import React from 'react';
import {Route,BrowserRouter as Router,} from 'react-router-dom';
import Home from './Home'
import Create from './Create'
import Menu from './Menu';

const Navbar=()=>{
    return(
        <Router>
            <Menu />
            <Route path="/" component={Home} exact />
            <Route path="/create" component={Create} />
        </Router>
    )
}

export default Navbar