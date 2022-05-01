import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './PhonebookForm.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/phonebook-reducer';
export default function PhonebookForm() {
  const token = useSelector(state => state.auth.token);
  const { data } = useFetchContactsQuery(token);
  const [createContact] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const addNewContact = items => {
    const searchContact = data
      .map(contact => contact.name.toLowerCase())
      .includes(items.name.toLowerCase());

    if (searchContact) {
      alert(`${items.name} is already in conacts`);
    } else {
      createContact({ id: shortid.generate(), token, ...items });
    }
  };

  const addContact = e => {
    e.preventDefault();
    addNewContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={addContact} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.addContact}>
        Add contact
      </button>
    </form>
  );
}

PhonebookForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
