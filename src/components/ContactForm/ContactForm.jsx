import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  FormStyle,
  InputName,
  InputGroup,
  InputLabel,
  Button,
  ErrorMessageStyle,
} from './ContacrForm.styled';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required("Ім'я обов'язкове!"),
  number: yup
    .string()
    .required("Номер обов'язковий!")
    .matches(phoneRegExp, 'Номер має складатись з цифр (не менше 7)')
    .min(7, 'Номер має бути не менше 7 цифр'),
});

const nameId = nanoid();
const numberId = nanoid();
const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyle>
        <InputGroup>
          <InputLabel htmlFor={nameId}>Ім'я</InputLabel>
          <InputName
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameId}
          />
          <ErrorMessageStyle name="name" component="div" />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor={numberId}>Телефон</InputLabel>
          <InputName
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={numberId}
          />
          <ErrorMessageStyle name="number" component="div" />
        </InputGroup>
        <Button type="submit">Додати контакт</Button>
      </FormStyle>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameId = nanoid();
//   numberId = nanoid();

//   handleChange = event => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameId}>
//           Ім'я
//           <input
//             type="text"
//             name="name"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//             id={this.nameId}
//           />
//         </label>
//         <label htmlFor={this.numberId}>
//           Телефон
//           <input
//             type="tel"
//             name="number"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//             id={this.numberId}
//           />
//         </label>
//         <button type="submit">Додати контакт</button>
//       </form>
//     );
//   }
// }
