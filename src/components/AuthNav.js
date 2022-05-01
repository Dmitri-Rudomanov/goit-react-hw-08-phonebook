import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    fontSize: 18,
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#FFF',
  },
  activeLink: {
    fontSize: 18,
    color: 'rgb(255, 115, 34)',
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={navData => (navData.isActive ? styles.activeLink : styles.link)}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        style={navData => (navData.isActive ? styles.activeLink : styles.link)}
      >
        Log in
      </NavLink>
    </div>
  );
}
