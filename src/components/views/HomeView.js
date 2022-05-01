import React from 'react';
import { FaPhoneSquare } from 'react-icons/fa';
import s from './RegisterViews.module.css';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div style={styles.container}>
      <h1 className={s.title}>
        Welcome to the Phonebook
        <FaPhoneSquare />
      </h1>
      <p className={s.Smallertitle}>
        Now you can keep your personal contacts using our APP
      </p>
      {!isLoggedIn && (
        <p className={s.Smallertitle}>
          Please, Sign up or Log in to have access to the Phonebook!
        </p>
      )}
    </div>
  );
};

export default HomeView;
