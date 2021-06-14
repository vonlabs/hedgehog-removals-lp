import React from 'react';

import TextFieldTitle from './textFieldTitle'
import styled from 'styled-components'

//Data Picker
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import 'date-fns';
  import DateFnsUtils from '@date-io/date-fns';

const SDatePicker = styled(KeyboardDatePicker)`
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
  .MuiPickersDay-daySelected{
    background-color: #44B758;
  }
  ${({ short }) => short && `
     width: 160px;
  `}
  @media (max-width: 560px) {
    width: 100%;
    margin-right: 0;
  }
`
const Container = styled.div`
  @media (max-width: 560px) {
    width: 100%;
    max-width: 460px;
    margin-right: 0;
  }
`

function DatePicker(props) {
    return (
      <Container>
        <TextFieldTitle>
          {props.title}
        </TextFieldTitle>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <SDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              size="small"
              format="MM/dd/yyyy"
              margin="normal"
              value={props.value}
              onChange={props.onChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              short={props.short}
            />
          </MuiPickersUtilsProvider>
      </Container>
    );
  }

export default DatePicker;