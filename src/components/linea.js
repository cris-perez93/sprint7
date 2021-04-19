import styled from '@emotion/styled';


const Container = styled.div`
max-width: 500px;
background-color: rgba(68, 65, 65, 0.616);
margin : 0 auto;

`;

const Frase = styled.p `
  font-family: 'Montserrat', sans-serif;
  color: whitesmoke;
  border-radius:10px;
  font-weight: bold;
  padding:10px;
  
  
`;


const Linea = (props) => {
    return (
        <Container>
            <Frase>{props.texto}</Frase>
        </Container>
        
      );
}
 
export default Linea;