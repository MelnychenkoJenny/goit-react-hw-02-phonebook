import styled from 'styled-components';

export const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const MainTitle = styled.h1`
margin-bottom: 20px;
@media screen and (min-width: 768px){
    margin: 0px auto 20px 0px;
    text-shadow: rgba(255, 255, 255, 0.5) 4px 2px 3px;
    font-size: 40px;
}
`
export const Title = styled.h2`
text-align: center;
margin-bottom: 15px;
`

export const ContactsContainer = styled.div`
margin-top: 20px;
background-color: ${({ theme: { colors } }) => colors.bgAlfa};
padding: 20px;
text-align: center;
    border-radius: 10px;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
    @media screen and (min-width: 768px){
        margin: 20px auto 0px 0px;}
`
