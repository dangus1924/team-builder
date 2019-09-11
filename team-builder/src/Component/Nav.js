import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <NavLink to='/' activeClassName="activeNavButton">Home</NavLink>
            {/* <NavLink to='/form' activeClassName="activeNavButton">Add Member</NavLink> */}
            
        </div>
    )
}

export default Navigation