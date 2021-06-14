import {
    Link
} from "react-router-dom";
import styled from 'styled-components'


const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    text-transform : uppercase;
    letter-spacing: 0px;
    font-weight: 800;
    background-image: url("./assets/Hedgehog-removals.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    width: 356px;
    height: 64px;
    flex-shrink: 0;
    @media (max-width: 850px) {
        height: 40px;
        width: 240px;
    }
`;

const Left = styled.span`
    color: #FFFFFF;
    
`;

const Right = styled.span`
    color: rgba(255,255,255,0.7);
`;


function Logo() {
    return (
        <Container>
            {/* <Left>
                Strong
            </Left>
            <Right>
                Move
            </Right> */}
        </Container>
    );
  }
  
export default Logo;
  