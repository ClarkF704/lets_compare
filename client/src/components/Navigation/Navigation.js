import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
        <ul>
            <NavLink to="/" style={{ color:'#0b0c10', textAlign:'center', textDecoration:'none', fontFamily:'Roboto Mono' }}>Home</NavLink>
        </ul>
      
    </div>
  );
}

export default Navigation;