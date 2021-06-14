import styled from 'styled-components'


const Text = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 42px;
    letter-spacing: 0px;
    font-weight: 600;
    color: rgba(0,0,0,0.75);
`;


function Title(props) {
    return (
        <Text>
            {props.title}
        </Text>
    );
  }
  
export default Title;
  