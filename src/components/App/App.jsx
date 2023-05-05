import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from 'components/data/contacts.json';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm';
// import {Filter} from 'components/Filter';
import { Contacts } from 'components/Contacts';

export class App extends Component {
  state = {
    contacts: initialContacts,
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    console.log(this.state.contacts);
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1>Телефонна книга</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Мої контакти</h2>
        {/* <Filter/> */}
        <p>Загальна кількість контактів: {contacts.length}</p>
        <Contacts contacts={contacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}
