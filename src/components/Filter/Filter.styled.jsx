import styled from 'styled-components';


export const InputGroup = styled.div`
margin-top: 10px;
display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
export const Label = styled.label`
text-align: center;
font-size: 16px;
margin-bottom: 5px;
`

export const Input = styled.input`
margin: 0 auto;
width: 250px;
padding: 5px 10px;
outline: none;
  border: 2px solid ${({ theme: { colors } }) => colors.border};
  background-color: transparent;
  border-radius: 20px;
  color: ${({ theme: { colors } }) => colors.text};`