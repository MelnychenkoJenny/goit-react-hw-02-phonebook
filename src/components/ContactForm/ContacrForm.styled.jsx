import styled, { keyframes } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

const showUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FormStyle = styled(Form)`
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  @media screen and (min-width: 768px) {
    margin: 0px auto 0px 0px;
  }
  @media screen and (min-width: 1200px) {
    padding: 30px;
    margin-left: 50px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const InputName = styled(Field)`
  width: 230px;
  padding: 5px 10px;
  outline: none;
  border: 2px solid ${({ theme: { colors } }) => colors.border};
  background-color: transparent;
  border-radius: 20px;
  color: ${({ theme: { colors } }) => colors.text};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 0 0 5px ${({ theme: { colors } }) => colors.border};
  }
  :focus {
    box-shadow: inset 0 0 10px ${({ theme: { colors } }) => colors.inputShadow};
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
    padding: 10px 15px;
    font-size: 22px;
  }
`;

export const InputLabel = styled.label`
  padding-left: 15px;
  margin-bottom: 5px;
  font-size: 18px;
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  box-shadow: rgb(173, 137, 109) 0px 0px 6px 0px inset;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgb(173, 137, 109);
  border-radius: 35px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.text};
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 5px 2px rgba(173, 137, 109, 0.5);
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
    padding: 10px 20px;
  }
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  width: 230px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.red};
  animation: ${showUp} 400ms ease-in-out;
  @media screen and (min-width: 1200px) {
    width: 330px;
    font-size: 20px;
  }
`;
