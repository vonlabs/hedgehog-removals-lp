import React from 'react';

import TextFieldTitle from './textFieldTitle'
import {TextField } from '@material-ui/core'
import styled from 'styled-components'

const STextField = styled(TextField)`
  background: white;
  width: 460px;
  margin-right: 40px;
  margin-bottom: 20px;
  fieldset {
    border: none;
  }
  input{
    padding-left: 8px;
    font-size: 18px;
  }
  ${({ long }) => long && `
    @media (min-width: 1060px) {
      width: 960px;
    }
  `}
  ${({ mid }) => mid && `
    @media (min-width: 1060px) {
      width: 694px;
    }
  `}

  @media (max-width: 560px) {
    width: 100%;
    max-width: 460px;
    margin-right: unset;
  }
`

const Container = styled.div`
  @media (max-width: 560px) {
    width: 100%;
  }
`

function Input(props) {
    return (
      <Container>
        <TextFieldTitle>
          {props.title}
        </TextFieldTitle>
        <STextField
          variant="outlined"
          size="small"
          placeholder={props.placeholder}
          multiline={props.multiline}
          rows={props.multiline ? 5 : null}
          rowsMax={props.multiline ? Infinity : null}
          long={props.long}
          mid={props.mid}
          value={props.value}
          onChange={props.onChange}
        />
      </Container>
    );
  }
  
  
export default Input;
  