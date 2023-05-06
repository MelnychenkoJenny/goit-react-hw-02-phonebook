import styled from 'styled-components';

export const ContactsList = styled.ul`
margin-top: 10px;
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    
`

export const ContactsItem = styled.li`
padding: 10px;
flex-basis: calc((100% - 10px) / 3);
background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    @media screen and (min-width: 768px){
        flex-basis: calc((100% - 10px) / 12);
    }
   
`

export const ButtonDelete = styled.button`
margin: 10px auto 0px;
display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  box-shadow: rgb(173,137,109) 0px 0px 6px 0px inset;
  background-color: rgba(255, 255, 255, 0.5);
border: 1px solid rgb(173,137,109);
  border-radius: 35px;
  font-size: 14px;
  color:  ${({ theme: { colors } }) => colors.text};
`