import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from 'components/data/contacts.json';
import {
  Container,
  MainTitle,
  Title,
  ContactsContainer,
  AmountContacts,
  EmptyText,
} from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Contacts } from 'components/Contacts';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    const formattedNumber = this.formattedNumber(number);
    const repeatName = this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatName) {
      return alert(`${name} вже є в контактах`);
    }
    const contact = {
      id: nanoid(),
      name,
      number: formattedNumber,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formattedNumber = number => {
    let formattedNumber = number.substring(0, 3) + '-';
    for (let i = 3; i < number.length; i += 1) {
      if ((i - 3) % 2 === 0 && i !== 3) {
        formattedNumber += '-';
      }
      formattedNumber += number[i];
    }
    return formattedNumber;
  };
  componentDidUpdate(prevProps, prevState) {

if(this.state.contacts === prevState.contacts) {

}
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <MainTitle>Телефонна книга</MainTitle>
        <ContactForm onSubmit={this.addContact} />
        <ContactsContainer>
          <Title>Мої контакти</Title>
          <AmountContacts>
            Загальна кількість контактів: {contacts.length}
          </AmountContacts>
          <Filter value={filter} onChange={this.changeFilter} />

          {visibleContacts.length ? (
            <Contacts
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <EmptyText>Не знайдено жодного контакту</EmptyText>
          )}
        </ContactsContainer>
      </Container>
    );
  }
}
