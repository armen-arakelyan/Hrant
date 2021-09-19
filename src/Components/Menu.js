import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Menu=()=>{
    const [home,setHome]=useState(false)
    const [create,setCreate]=useState(false)
    const active='rgb(0,0,0,0.1)';
    return(
        <div className="navbar">
            <div className="logo">
            {home?<Link to="/">&#9731;</Link>:<Link onClick={()=>{setHome(true);setCreate(false)}} to="/">&#9731;</Link>}
            </div>
            <div className="navbar_content">
            {home?<Link style={{backgroundColor:active}} to="/">Home</Link>:<Link onClick={()=>{setHome(true);setCreate(false)}} to="/">Home</Link>}
            {create?<Link style={{backgroundColor:active}} to="/create">Create</Link>:<Link onClick={()=>{setHome(false);setCreate(true)}} to="/create">Create</Link>}  
            </div>
        </div>
    )
}

export default Menu;