import React from 'react';
import TextFieldTitle from './textFieldTitle'
import styled from 'styled-components'
import MuiSelect from '@material-ui/core/Select'

const SSelect = styled(MuiSelect)`
  background: white;
  width: 460px;
  margin-right: 40px;
  margin-bottom: 20px;
  margin-top: 0;
  &.MuiInput-underline:before {
    content: none;
  }
  .MuiSelect-root {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 8px;
    background-color: white;
  }
  .MuiSvgIcon-root {
    color: #44B758;
    right: 12px;
  }
  &.MuiInput-underline:after {
    border-bottom: 2px solid #44B758;
  }
  &.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: none
  }
  ${({ long }) => long && `
    @media (min-width: 1060px) {
      width: 960px;
    }
  `}
  
  @media (max-width: 560px) {
    width: 100%;
    max-width: 460px;
    margin-right: 0;
  }
`
const Container = styled.div`
  ${({ long }) => long && `
  `}
  @media (max-width: 560px) {
    width: 100%;
  }
`


function Select(props) {
    return (
      <Container
        long={props.long}
      >
        <TextFieldTitle>
          {props.title}
        </TextFieldTitle>
        <SSelect
          onChange={props.handleDateChange}
          inputVariant="outlined"
          size="small"
          long={props.long}
          value={props.value}
          onChange={props.onChange}
        >
          {props.children}
        </SSelect>
      </Container>
    );
  }

  export default Select;