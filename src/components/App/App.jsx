import s from 'components/App/App.module.css';
// import React, { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
// import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function App() {

  return (
    <div className={s.wrapper}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList />
      </Section>
    </div>
  );
}
