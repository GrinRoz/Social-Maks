import react from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom';

function Nav(){
    return(
        <div className="nav">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/users">users</NavLink>
            <NavLink to="/dialogs">dialogs</NavLink>
        </div>
   );
}

export default Nav;