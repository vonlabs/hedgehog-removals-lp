import styled from 'styled-components'


const Text = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    letter-spacing: 0px;
    font-weight: 600;
    color: #44B758;
    text-transform : uppercase;
`;


function SmallTitle(props) {
    return (
        <Text>
            {props.title}
        </Text>
    );
  }
  
export default SmallTitle;
  