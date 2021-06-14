import React from 'react';

import TextFieldTitle from './textFieldTitle'
import styled from 'styled-components'

//Data Picker
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers';
  import 'date-fns';
  import DateFnsUtils from '@date-io/date-fns';

const STimePicker = styled(KeyboardTimePicker)`
  background: white;
  width: 460px;
  margin-right: 40px;
  margin-bottom: 20px;
  margin-top: 0;
  fieldset {
    border: none;
  }
  input{
    padding-left: 8px;
    font-size: 18px;
  }
  .MuiIconButton-root {
    padding: 6px;
    color: #44B758;
  }
  .MuiOutlinedInput-adornedEnd {
    padding-right: 7px;
  }
  @media (max-width: 560px) {
    width: 100%;
    margin-right: 0;
  }
`
const Container = styled.div`
  @media (max-width: 560px) {
    width: 100%;
    max-width: 460px;
  }
`

function TimePicker(props) {
  return (
    <Container>
      <TextFieldTitle>
        {props.title}
      </TextFieldTitle>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <STimePicker
            margin="normal"
            variant="inline"
            value={props.value}
            onChange={props.onChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            inputVariant="outlined"
            size="small"
          />
        </MuiPickersUtilsProvider>
    </Container>
  );
}

export default TimePicker;