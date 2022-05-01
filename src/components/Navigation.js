import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
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

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        style={navData => (navData.isActive ? styles.activeLink : styles.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <nav>
          <NavLink
            to="/contacts"
            style={navData =>
              navData.isActive ? styles.activeLink : styles.link
            }
          >
            Contacts
          </NavLink>
        </nav>
      )}
    </nav>
  );
};
export default Navigation;
