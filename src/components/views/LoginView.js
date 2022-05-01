import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './RegisterViews.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.user}>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.form__group}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.form__input}
          />
        </label>

        <label className={s.form__group}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.form__input}
          />
        </label>

        <button type="submit" className={s.btn}>
          Log in
        </button>
      </form>
    </div>
  );
}
