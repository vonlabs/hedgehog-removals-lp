import styled from 'styled-components'


const Text = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    letter-spacing: 0px;
    font-weight: 400;
    color: rgba(0,0,0,0.75);
    p {
        margin-top: 8px;
        margin-bottom: 24px;
    }
`;


function Title(props) {
    return (
        <Text>
            {props.children}
        </Text>
    );
  }
  
export default Title;
  