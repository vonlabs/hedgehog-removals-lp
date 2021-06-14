import React from 'react';

import TextFieldTitle from './textFieldTitle'
import MuiIconButton from '@material-ui/core/IconButton';
import styled from 'styled-components'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const Container = styled.div`
  background: white;
  width: 442px;
  height: 42px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
  padding-right: 12px;
  @media (max-width: 560px) {
    width: 100%;
    max-width: 440px; //because of the padding
    margin-right: 0;
  }
`

const Text = styled.div`
  width: 100%;
  font-size: 15px;
`

const Manipulator = styled.div`
  display: inline-flex;
  flex-direction: row;
`

const IconButton = styled(MuiIconButton)`
  color: ${props => props.add ? "#44B758" : "rgba(0, 0, 0, 0.54);"};
`

const Number = styled.div`
  width: 20px;
  text-align: center;
`


function NumberPicker(props) {
  return (
    <Container>
      <Text>
        {props.title}
      </Text>
      <Manipulator>
        <IconButton aria-label="delete" size="small" 
          onClick={props.remove}
        >
          <RemoveCircleIcon fontSize="inherit" />
        </IconButton>
        <Number>
        {props.value}
        </Number>

        <IconButton aria-label="delete" size="small" add
          onClick={props.add}
        >
          <AddCircleIcon fontSize="inherit" color="#44B758"/>
        </IconButton>
      </Manipulator>
    </Container>
  );
}

  
export default NumberPicker;
  