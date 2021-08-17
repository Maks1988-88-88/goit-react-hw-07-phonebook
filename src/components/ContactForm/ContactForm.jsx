import { useCreateContactsMutation } from 'redux/slices/contacts';


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/slices/contacts';
// import { nanoid } from 'nanoid';

import s from 'components/ContactForm/ContactForm.module.css';

export default function ContactForm() {

  const [createContacts] = useCreateContactsMutation();

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };


  const handleSubmit = e => {
    e.preventDefault();
    createContacts({ name, number });
    


    // if (contacts.some(contact => contact.name === name)) {
    //   alert(`${name} is already in contacts.`);
    // } else {
    //   dispatch(addContacts({ id: nanoid(10), name, number }));
    // }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </div>
      <button className={s.btn}>Add contact</button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
