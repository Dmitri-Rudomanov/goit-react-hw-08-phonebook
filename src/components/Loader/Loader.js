import s from './Loader.module.css';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Audio height="100" width="100" color="yellow" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
