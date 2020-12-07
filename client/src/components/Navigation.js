import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/logout" style={{color: 'white', textDecoration: 'none'}}>Sign Out</NavLink>
        </div>
    );
}

export default Navigation;