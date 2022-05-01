import React from 'react';
import PhonebookItem from '../PhonebookItem/PhonebookItem.js';
import s from './PhonebookList.module.css';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/phonebook-reducer';

const PhonebookList = () => {
  const token = useSelector(state => state.auth.token);
  const { data, isLoading } = useFetchContactsQuery(token);
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = () => {
    if (!isLoading) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  return (
    <>
      {!isLoading && (
        <ul className={s.list}>
          {getVisibleContacts().map(contact => (
            <PhonebookItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PhonebookList;
