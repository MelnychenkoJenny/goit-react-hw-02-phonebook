import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';


export const FormStyle = styled(Form)`
background-color: ${({ theme: { colors } }) => colors.bgAlfa};
padding: 20px;
    border-radius: 10px;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
    @media screen and (min-width: 768px){
        margin: 0px auto 0px 0px;}
`

export const InputGroup = styled.div`
display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`



export const InputName = styled(Field)`
width: 230px;
padding: 5px 10px;
outline: none;
  border: 2px solid ${({ theme: { colors } }) => colors.border};
  background-color: transparent;
  border-radius: 20px;
  color: ${({ theme: { colors } }) => colors.text};

`

export const InputLabel = styled.label`
padding-left: 15px;
margin-bottom: 5px;
font-size: 18px;
`

export const Button = styled.button`
margin: 0 auto;
display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  box-shadow: rgb(173,137,109) 0px 0px 6px 0px inset;
  background-color: rgba(255, 255, 255, 0.5);
border: 1px solid rgb(173,137,109);
  border-radius: 35px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 600;
  color:  ${({ theme: { colors } }) => colors.text};
`

export const ErrorMessageStyle = styled(ErrorMessage)`
width: 230px;
text-align: center;
color: ${({ theme: { colors } }) => colors.red};
`