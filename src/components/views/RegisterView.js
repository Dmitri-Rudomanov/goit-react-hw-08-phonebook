import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './RegisterViews.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.user}>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.form__group}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            required
            className={s.form__input}
            onChange={handleChange}
          />
        </label>

        <label className={s.form__group}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            required
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
            required
            onChange={handleChange}
            className={s.form__input}
          />
        </label>

        <button type="submit" className={s.btn}>
          Sign up
        </button>
      </form>
    </div>
  );
}
