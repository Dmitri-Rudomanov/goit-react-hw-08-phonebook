import { useDispatch, useSelector } from 'react-redux';
import Avatar from './avatar.png';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img src={Avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>
        Добро пожаловать,<span className={s.user}>{name}</span>
      </span>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </button>
    </div>
  );
}
