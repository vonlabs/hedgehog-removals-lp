import styled from 'styled-components'



const Container = styled.div`
  display: flex;
  flex-direction: columns;
  width: 100%;
  justify-content: center;
  flex-shrink: 0;
  background: white;
`;

const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 32px;
  margin-left: 18px;
  margin-right: 18px;
  font: normal normal normal 16px/32px Poppins;
  color: #707070;
  text-align: center;
`;



function Footer(props) {
    return (
        <Container>
          <Text>
            Hedgehog Removals  / UB6 0EW Greenford, London / 553 Oldfield Lane North<br></br>
            MOB: 0782 183 22 74<br></br>
            office@hedgehogremovals.co.uk<br></br>
            Copyright © 2021. All Rights Reserved.
          </Text>
        </Container>
    );
  }
  
export default Footer;