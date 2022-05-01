import React from 'react';
import s from './PhonebookItem.module.css';
import { useDeleteContactMutation } from '../../redux/phonebook-reducer';
import { useSelector } from 'react-redux';

const PhonebookItem = ({ contact }) => {
  const token = useSelector(state => state.auth.token);
  const [deleteContact] = useDeleteContactMutation();
  const arg = { token, contact: contact.id };
  return (
    <li className={s.contact}>
      <span>
        {contact.name}: <span className={s.number}>{contact.number}</span>
      </span>
      <button
        type="button"
        className={s.delete}
        onClick={() => deleteContact(arg)}
      >
        Delete
      </button>
    </li>
  );
};
export default PhonebookItem;
