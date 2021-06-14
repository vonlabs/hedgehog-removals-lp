import React from 'react';
import styled from 'styled-components'

function Confirm(props) {
    const Container = styled.div`
      background: white;
      display: flex;
      flex-wrap: wrap;
      padding: 24px;
      border-radius: 10px;
      max-width: 912px;
      margin-bottom: 8px;
    `
  
    const Text = styled.div`
      width: 100%;
      margin-bottom: 14px;
    `
  
    return (
      <Container
  
      >
        <Text>Please read the following information carefully. If everything is correct, send the you book-now.</Text>
        
        <Tile
          title={"First name"}
          info={props.First_name}
        />
              <Tile
          title={"Last name"}
          info={props.Last_name}
        />
              <Tile
          title={"E-mail"}
          info={props.E_mail}
        />
              <Tile
          title={"Phone number"}
          info={props.Phone_number}
        />
              <Tile
          title={"Moving date"}
          info={props.selectedDate}
        />
              <Tile
          title={"Van size"}
          info={props.Van_size}
        />
              <Tile
          title={"Helpers"}
          info={props.Helpers}
        />
              <Tile
          title={"Hours"}
          info={props.Hours}
        />
              <Tile
          title={"Moving from"}
          info={props.Moving_from}
        />
                    <Tile
          title={"Address line 1"}
          info={props.from_Address_line_1}
        />
              <Tile
          title={"Address line 2 (optional)"}
          info={props.from_Address_line_2}
        />
              <Tile
          title={"City"}
          info={props.from_City}
        />
              <Tile
          title={"Postal code"}
          info={props.from_Postal_code}
        />
              <Tile
          title={"Moving to"}
          info={props.Moving_to}
        />
              <Tile
          title={"Address line 1"}
          info={props.to_Address_line_1}
        />
        <Tile
          title={"Address line 2 (optional)"}
          info={props.to_Address_line_2}
        />
                <Tile
          title={"City"}
          info={props.to_City}
        />
                <Tile
          title={"Postal code"}
          info={props.to_Postal_code}
        />
                <Tile
          title={"How do you like to pay?"}
          info={props.payement}
        />
                <Tile
          title={"Additional information about your move (optional)"}
          info={props.Additional}
        />
      </Container>
    );
  }
  
  function Tile(props) {
    const Container = styled.div`
      margin-top: 18px;
      margin-bottom: 9px;
      width: 456px;
      @media (max-width: 1059px) {
        width: 100%;
      }
    `
  
    const Title = styled.p`
      font-weight: 600;
    `
  
    return (
      <Container>
        <Title>{props.title}</Title>
        <p>{props.info}</p>
      </Container>
    );
  }
  
  export default Confirm;