import React from 'react';
import PageTemplate from '../../components/page-template'
import {Title, Text} from '../../components/typography'
import Button from '../../components/button'

import {MenuItem} from '@material-ui/core'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
import MuiFormControl from '@material-ui/core/FormControl';

import styled from 'styled-components'

import Input from '../../components/inputs/input'
import NumberPicker from '../../components/inputs/numberPicker';
import DatePicker from '../../components/inputs/datePicker'

const TextFieldTitle = styled.div`
  max-width: 460px;
  width: 100%;
  font-size: 16px;
  color: rgba(30, 30, 30, 0.75);
  padding-left: 8px;
`

const TextFieldsSquare = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 510px;
  flex-grow: 0;
  ${({ mid }) => mid && `
    @media (min-width: 1060px) {
      max-width: 734px;
    }
  `}
`

const FormControl = styled(MuiFormControl)`
  margin-bottom: 20px;
  width: 460px;
  //width: 694px;
 // width: 100%;
  margin-right: 40px;
  .MuiFormGroup-row {
    justify-content: space-between;
  }
  .MuiFormControlLabel-root {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  @media (max-width: 560px) {
    width: 100%;
    max-width: 460px;
    margin-right: 0;
  }
`

const FormControlLabel = styled(MuiFormControlLabel)`
    background: white;
    padding-left: 3px;
    padding-right: 17px;
    margin-left: 0;
    margin-right: 0px;
    .MuiRadio-root.Mui-checked {
      color: #44B758;
    }
    .MuiRadio-colorPrimary.Mui-disabled {
      color: rgba(0, 0, 0, 0.26);
    }
    .MuiFormControlLabel-label {
      margin: 12px 0;
    }
`

const InputsImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`


const Image = styled.div`
  width: 100%;
  flex-grow: 1;
  background-image: url("./assets/${props => props.assetName}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  @media (max-width: 560px) {
    display: none;
  }
`

function Prices() {
  const [step, setStep] = React.useState(0);

  const [Your_name, set_Your_name] = React.useState('');
  const [Email_address, set_Email_address] = React.useState('');
  const [Contact_number, set_Contact_number] = React.useState('');
  const [from_Address_line_1, set_from_Address_line_1] = React.useState('');
  const [from_Address_line_2, set_from_Address_line_2] = React.useState('');
  const [from_City, set_from_City] = React.useState('');
  const [from_Postal_code, set_from_Postal_code] = React.useState('');
  const [from_property_type, set_from_property_type] = React.useState('');
  const [to_property_type, set_to_property_type] = React.useState('');
  const [to_Address_line_1, set_to_Address_line_1] = React.useState('');
  const [to_Address_line_2, set_to_Address_line_2] = React.useState('');
  const [to_City, set_to_City] = React.useState('');
  const [to_Postal_code, set_to_Postal_code] = React.useState('');
  const [Additional , set_Additional ] = React.useState('');

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDateString, setSelectedDateString] = React.useState(new Date().toString().substring(0,15));

  const [payement, set_payement] = React.useState('');

  const [to_Number_of_bedrooms , set_to_Number_of_bedrooms ] = React.useState(1);
  const [to_Floor_level , set_to_Floor_level ] = React.useState(0);
  const [from_Number_of_bedrooms , set_from_Number_of_bedrooms ] = React.useState(1);
  const [from_Floor_level , set_from_Floor_level ] = React.useState(0);
  
  const handle_to_Number_of_bedrooms = (input) => {
    console.log(input)
    if(to_Number_of_bedrooms >= 0 && to_Number_of_bedrooms < 99 && input){
      set_to_Number_of_bedrooms(to_Number_of_bedrooms + 1)
    }
    if(to_Number_of_bedrooms > 0 && !input){
      set_to_Number_of_bedrooms(to_Number_of_bedrooms - 1)
    }
  };

  const handle_to_Floor_level = (input) => {
    if(to_Floor_level > -99 && to_Floor_level < 99 && input){
      set_to_Floor_level(to_Floor_level + 1)
    }
    if(to_Floor_level > -9 && to_Floor_level < 99 && !input){
      set_to_Floor_level(to_Floor_level - 1)
    }
  };

  const handle_from_Number_of_bedrooms = (input) => {
    console.log(input)
    if(from_Number_of_bedrooms >= 0 && from_Number_of_bedrooms < 99 && input){
      set_from_Number_of_bedrooms(from_Number_of_bedrooms + 1)
    }
    if(from_Number_of_bedrooms > 0 && !input){
      set_from_Number_of_bedrooms(from_Number_of_bedrooms - 1)
    }
  };

  const handle_from_Floor_level = (input) => {
    if(from_Floor_level > -99 && from_Floor_level < 99 && input){
      set_from_Floor_level(from_Floor_level + 1)
    }
    if(from_Floor_level > -9 && from_Floor_level < 99 && !input){
      set_from_Floor_level(from_Floor_level - 1)
    }
  };


  const handleDateChange = (date) => {
    setSelectedDateString(date.toString().substring(0,15));
    setSelectedDate(date);
  };

  const send = async (payload) => {
    let url = `/api/get_quote.php`;
    let response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(e=>{console.error(e)});
  }
  
  return (
    <PageTemplate
        title='Get your quote'
    >
        {
          step === 0 &&
            <div>
              <Title title="Your current address" />
              <InputsImageContainer>
                <TextFieldsSquare>
                  <Input
                    title="Address line 1"
                    placeholder="66 Vernon Rd"
                    value={from_Address_line_1}
                    onChange={(event)=>{set_from_Address_line_1(event.target.value)}}
                  />
                  <Input
                    title="Address line 2 (optional)"
                    placeholder="Flat 2"
                    value={from_Address_line_2}
                    onChange={(event)=>{set_from_Address_line_2(event.target.value)}}
                  />
                  <Input
                    title="City"
                    placeholder="London"
                    value={from_City}
                    onChange={(event)=>{set_from_City(event.target.value)}}
                  />
                  <Input
                    title="Postal code"
                    placeholder="SW1W 0NY"
                    value={from_Postal_code}
                    onChange={(event)=>{set_from_Postal_code(event.target.value)}}
                  />
                  <FormControl component="fieldset">
                    <TextFieldTitle>Current property type</TextFieldTitle>
                    <RadioGroup 
                      row 
                      aria-label="position" 
                      name="position" 
                      defaultValue="top"
                      value={from_property_type}
                      onChange={(event)=>{set_from_property_type(event.target.value)}}
                    >
                      <FormControlLabel value="Apartment/Flat" control={<Radio color="primary" />} label="Apartment/Flat" />
                      <FormControlLabel value="House" control={<Radio color="primary" />} label="House"  />
                      <FormControlLabel value="Storage" control={<Radio color="primary" />} label="Storage"  />
                    </RadioGroup>
                  </FormControl>
                  <NumberPicker
                    title="Number of bedrooms"
                    value={from_Number_of_bedrooms}
                    add={()=>{handle_from_Number_of_bedrooms(true)}}
                    remove={()=>{handle_from_Number_of_bedrooms(false)}}
                  />
                  <NumberPicker
                    title="Floor level"
                    value={from_Floor_level}
                    add={()=>{handle_from_Floor_level(true)}}
                    remove={()=>{handle_from_Floor_level(false)}}
                  />
                  <Button
                    green
                    onClick={()=>{setStep(1)}}
                    card
                    disabled = {
                      from_Address_line_1 === "" ||
                      from_City === "" ||
                      from_Postal_code === "" ||
                      from_property_type === "" 
                    }
                  >
                    Next step
                  </Button>
                </TextFieldsSquare>
                <Image
                  assetName={"Get+your+quote-illustration+1.svg"}
                />
              </InputsImageContainer>
            </div>
        }
        {
          step === 1 &&
            <div>
              <Title title="Where are you moving to?" />
              <InputsImageContainer>
              <TextFieldsSquare>
              <Input
                  title="Address line 1"
                  placeholder="66 Vernon Rd"
                  value={to_Address_line_1}
                  onChange={(event)=>{set_to_Address_line_1(event.target.value)}}
                />
                <Input
                  title="Address line 2 (optional)"
                  placeholder="Flat 2"
                  value={to_Address_line_2}
                  onChange={(event)=>{set_to_Address_line_2(event.target.value)}}
                />
                <Input
                  title="City"
                  placeholder="London"
                  value={to_City}
                  onChange={(event)=>{set_to_City(event.target.value)}}
                />
                <Input
                  title="Postal code"
                  placeholder="SW1W 0NY"
                  value={to_Postal_code}
                  onChange={(event)=>{set_to_Postal_code(event.target.value)}}
                />
                <FormControl component="fieldset">
                  <TextFieldTitle>Destination property type</TextFieldTitle>
                  <RadioGroup 
                    row 
                    aria-label="position" 
                    name="position" 
                    defaultValue="top"
                    value={to_property_type}
                    onChange={(event)=>{set_to_property_type(event.target.value)}}
                  >
                    <FormControlLabel value="Apartment/Flat" control={<Radio color="primary" />} label="Apartment/Flat" />
                    <FormControlLabel value="House" control={<Radio color="primary" />} label="House"  />
                    <FormControlLabel value="Storage" control={<Radio color="primary" />} label="Storage"  />
                  </RadioGroup>
                </FormControl>
                <NumberPicker
                  title="Number of bedrooms"
                  value={to_Number_of_bedrooms}
                  add={()=>{handle_to_Number_of_bedrooms(true)}}
                  remove={()=>{handle_to_Number_of_bedrooms(false)}}
                />
                <NumberPicker
                  title="Floor level"
                  value={to_Floor_level}
                  add={()=>{handle_to_Floor_level(true)}}
                  remove={()=>{handle_to_Floor_level(false)}}
                />
                <Button
                  green
                  onClick={()=>{setStep(2)}}
                  card
                  disabled = {
                    to_Address_line_1 === "" ||
                    to_City === "" ||
                    to_Postal_code === "" ||
                    to_property_type === "" 
                  }
                >
                  Next step
                </Button>
                <Button
                  onClick={()=>{setStep(0)}}
                  outlined
                  card
                >
                  previous step
                </Button>
              </TextFieldsSquare>
              <Image
                  assetName={"Get+your+quote-illustration+2.svg"}
                />
              </InputsImageContainer>
            </div>
          }
          {
            step === 2 &&
            <div>
              <Title title="Your moving details" />
              <InputsImageContainer>
              <TextFieldsSquare mid>
                <DatePicker
                  title="Moving date"
                  value={selectedDate}
                  onChange={handleDateChange}
                 // short
                />
                <FormControl component="fieldset" mid>
                  <TextFieldTitle>Additional moving services required (optional)</TextFieldTitle>
                  <RadioGroup 
                    aria-label="position" 
                    name="position" 
                    defaultValue="top"
                    value={payement}
                    onChange={(event)=>{set_payement(event.target.value)}}
                  >
                    <FormControlLabel 
                      value="Full packing" 
                      control={<Radio color="primary" />} 
                      label="Full packing" 
                    />
                    <FormControlLabel 
                      value="Packing of fragile items only or specified partial packing" 
                      control={<Radio color="primary" />} 
                      label="Packing of fragile items only or specified partial packing" 
                     />
                    <FormControlLabel 
                      value="No packing - large fragile Items and furniture will still be packed with this option" 
                      control={<Radio color="primary" />} 
                      label="No packing - large fragile Items and furniture will still be packed with this option" 
                     />
                  </RadioGroup>
                </FormControl>
                <Input
                  title="Additional information about your move (optional)"
                  placeholder="E.g. parking issues, garage / shed / loft items, valuable items, large items"
                  multiline
                  value={Additional}
                  onChange={(event)=>{set_Additional(event.target.value)}}
                //  mid
                />
                <Button
                  green
                  card
                  onClick={()=>{setStep(3)}}
                  disabled = {
                    payement === "" 
                  }
                >
                  Next step
                </Button>
                <Button
                  card
                  outlined
                  onClick={()=>{setStep(1)}}
                >
                  previous step
                </Button>

              </TextFieldsSquare>
              <Image
                  assetName={"Get+your+quote-illustration+3.svg"}
                />
              </InputsImageContainer>
            </div>
          }
          {
            step === 3 &&
            <div>
              <Title title="Your contact details" />
              <InputsImageContainer>
              <TextFieldsSquare>
                <Input
                  title="Your name"
                  placeholder="John Brown"
                  value={Your_name}
                  onChange={(event)=>{set_Your_name(event.target.value)}}
                />
                <Input
                  title="Email address"
                  placeholder="j.brown@strongmove.com"
                  value={Email_address}
                  onChange={(event)=>{set_Email_address(event.target.value)}}
                />
                <Input
                  title="Contact number"
                  placeholder="(+44) 500 600 700"
                  value={Contact_number}
                  onChange={(event)=>{set_Contact_number(event.target.value)}}
                />
                <Button
                  green
                  onClick={()=>{
                    send({
                      Your_name,
                      Email_address,
                      Contact_number,
                      from_Address_line_1,
                      from_Address_line_2,
                      from_City,
                      from_Postal_code,
                      from_property_type,
                      to_property_type,
                      to_Address_line_1,
                      to_Address_line_2,
                      to_City,
                      to_Postal_code,
                      Additional,
                      selectedDate:selectedDateString,
                      payement,
                      to_Number_of_bedrooms,
                      to_Floor_level,
                      from_Number_of_bedrooms,
                      from_Floor_level
                    });
                    setStep(4)}
                  }
                  card
                  disabled = {
                    Your_name === "" ||
                    Email_address === ""  ||
                    Contact_number === "" 
                  }
                >
                  Submit
                </Button>
                <Button
                  card
                  outlined
                  onClick={()=>{setStep(2)}}
                >
                  previous step
                </Button>

              </TextFieldsSquare>
              <Image
                  assetName={"Get+your+quote-illustration+4.svg"}
                />
              </InputsImageContainer>
            </div>
          }
          {
            step === 4 &&
              <div>
                <Title title="Your request was successfully sent" />
                <Text>
                  <p>We will confirm your booking as soon as possible</p>
                </Text>
              </div>
          }
    </PageTemplate>
  );
}

export default Prices;
