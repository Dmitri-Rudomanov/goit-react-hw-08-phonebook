import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebook-reducer';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Фильтр по имени
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        className={s.input}
      />
    </label>
  );
};
export default Filter;
