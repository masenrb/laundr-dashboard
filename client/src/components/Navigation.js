import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">SignIn</NavLink>
            <NavLink to="/logout">Sign Out</NavLink>
        </div>
    );
}

export default Navigation;