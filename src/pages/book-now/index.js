import React from 'react';
import PageTemplate from '../../components/page-template'
import {Title, Text} from '../../components/typography'
import Button from '../../components/button'

import {MenuItem} from '@material-ui/core'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
import MuiFormControl from '@material-ui/core/FormControl';


//Data Picker
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';


import styled from 'styled-components'

import Input from '../../components/inputs/input'
import DatePicker from '../../components/inputs/datePicker'
import TimePicker from '../../components/inputs/timePicker'
import Select from '../../components/inputs/select'
import Confirm from '../../components/confirmation-screen'

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
  max-width: 1000px;
`

const FormControl = styled(MuiFormControl)`
  margin-bottom: 20px;
  width: 460px;
  margin-right: 40px;
  label {
    margin-bottom: 8px;
  }
  @media (max-width: 560px) {
    width: 100%;
    max-width: 460px;
    margin-right: 0;
  }
`

const FormControlLabel = styled(MuiFormControlLabel)`
    background: white;
    height: 48px;
    padding-left: 10px;
    padding-right: 24px;
    margin-left: 0;
    margin-right: 20px;
    .MuiRadio-root.Mui-checked {
      color: #44B758;
    }
    .MuiRadio-colorPrimary.Mui-disabled {
      color: rgba(0, 0, 0, 0.26);
    }
`


function Prices() {
  const [step, setStep] = React.useState(0);

  const [First_name, set_First_name] = React.useState('');
  const [Last_name, set_Last_name] = React.useState('');
  const [E_mail, set_E_mail] = React.useState('');
  const [Phone_number, set_Phone_number] = React.useState('');
  const [Van_size, set_Van_size] = React.useState('');
  const [Helpers, set_Helpers] = React.useState('');
  const [Hours , set_Hours] = React.useState('');
  const [Moving_from, set_Moving_from] = React.useState('');
  const [from_Address_line_1, set_from_Address_line_1] = React.useState('');
  const [from_Address_line_2, set_from_Address_line_2] = React.useState('');
  const [from_City, set_from_City] = React.useState('');
  const [from_Postal_code, set_from_Postal_code] = React.useState('');
  const [Moving_to, set_Moving_to] = React.useState('');
  const [to_Address_line_1, set_to_Address_line_1] = React.useState('');
  const [to_Address_line_2, set_to_Address_line_2] = React.useState('');
  const [to_City, set_to_City] = React.useState('');
  const [to_Postal_code, set_to_Postal_code] = React.useState('');
  const [payement, set_payement] = React.useState('');
  const [Additional , set_Additional ] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDateString, setSelectedDateString] = React.useState(new Date().toGMTString().substring(0,22));

  
  const handleStep = (input) => {
    setStep(input);
  };

  const handleDateChange = (date) => {
    setSelectedDateString(date.toString().substring(0,21));
    setSelectedDate(date);
  };

  const send = async (payload) => {
    let url = `/api/book_now.php`;
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
        title='Book Now'
    >
        {
          step === 0 &&
            <div>
              <Title title="Fill the form" />
              <Text>
                <p>After filling this form, one of our adviser will contact you as soon as possible to provide all the information and help you to the best option for you. </p>
                <p>* We provide service up to 4th floor without lift.</p>
              </Text>
              <TextFieldsSquare>
                <Input
                  title="First name"
                  placeholder="John"
                  value={First_name}
                  onChange={(event)=>{set_First_name(event.target.value)}}
                />
                <Input
                  title="Last name"
                  placeholder="Smith"
                  value={Last_name}
                  onChange={(event)=>{set_Last_name(event.target.value)}}
                />
                <Input
                  title="E-mail"
                  placeholder="j.smith@gmail.com"
                  value={E_mail}
                  onChange={(event)=>{set_E_mail(event.target.value)}}
                />
                <Input
                  title="Phone number"
                  placeholder="0600 700 80 90"
                  value={Phone_number}
                  onChange={(event)=>{set_Phone_number(event.target.value)}}
                />
                <DatePicker
                  title="Moving date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                <TimePicker
                  title="Start time"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                <Select
                  title="Van size"
                  value={Van_size}
                  onChange={(event)=>{set_Van_size(event.target.value)}}
                >
                  <MenuItem value={'Medium'}>Medium</MenuItem>
                  <MenuItem value={'Large'}>Large</MenuItem>
                  <MenuItem value={'Extra Large'}>Extra Large</MenuItem>
                  <MenuItem value={'Luton vans'}>Luton vans</MenuItem>
                </Select>
                <Select
                  title="Helpers"
                  value={Helpers}
                  onChange={(event)=>{set_Helpers(event.target.value)}}
                >
                  <MenuItem value={'Driver only'}>Drivers only</MenuItem>
                  <MenuItem value={'1 helper'}>1 helper</MenuItem>
                  <MenuItem value={'2 helpers'}>2 helpers</MenuItem>
                </Select>
                <Select
                  title="Hours (include loading time, travel duration and unloading time):"
                  long
                  value={Hours}
                  onChange={(event)=>{set_Hours(event.target.value)}}
                >
                  <MenuItem value={'2 hours'}>2 hours (minimum charge)</MenuItem>
                  <MenuItem value={'3 hours'}>3 hours</MenuItem>
                  <MenuItem value={'4 hours'}>4 hours</MenuItem>
                  <MenuItem value={'5 hours'}>5 hours</MenuItem>
                  <MenuItem value={'6 hours'}>6 hours</MenuItem>
                  <MenuItem value={'7 hours'}>7 hours</MenuItem>
                  <MenuItem value={'8 hours'}>8 hours</MenuItem>
                </Select>
                <Button
                  long
                  green
                  card
                  onClick={()=>{setStep(1)}}
                  disabled={
                    First_name === '' ||
                    Last_name === '' ||
                    E_mail=== '' ||
                    Phone_number=== '' ||
                    Van_size=== '' ||
                    Helpers=== '' ||
                    Hours=== '' 
                  }
                >
                  Next step
                </Button>
              </TextFieldsSquare>
            </div>
        }
        {
          step === 1 &&
            <div>
              <Title title="Fill the form" />
              <TextFieldsSquare>
                <Select
                  title="Moving from"
                  long
                  value={Moving_from}
                  onChange={(event)=>{set_Moving_from(event.target.value)}}
                >
                  <MenuItem value={'Basement'}>Basement</MenuItem>
                  <MenuItem value={'Ground floor'}>Ground floor</MenuItem>
                  <MenuItem value={'1st floor'}>1st floor</MenuItem>
                  <MenuItem value={'2nd floor'}>2nd floor</MenuItem>
                  <MenuItem value={'3rd floor'}>3rd floor</MenuItem>
                  <MenuItem value={'4th floor'}>4th floor</MenuItem>
                  <MenuItem value={'5th floor'}>5th floor</MenuItem>
                </Select>
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
                <Select
                  title="Moving to"
                  long
                  value={Moving_to}
                  onChange={(event)=>{set_Moving_to(event.target.value)}}
                >
                  <MenuItem value={'Basement'}>Basement</MenuItem>
                  <MenuItem value={'Ground floor'}>Ground floor</MenuItem>
                  <MenuItem value={'1st floor'}>1st floor</MenuItem>
                  <MenuItem value={'2nd floor'}>2nd floor</MenuItem>
                  <MenuItem value={'3rd floor'}>3rd floor</MenuItem>
                  <MenuItem value={'4th floor'}>4th floor</MenuItem>
                  <MenuItem value={'5th floor'}>5th floor</MenuItem>
                </Select>
                <Input
                  title="Address line 1"
                  placeholder="67 Vernon Rd"
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
                <Button
                  card
                  onClick={()=>{setStep(0)}}
                  outlined
                  lastOnMobile
                >
                  previous step
                </Button>
                <Button
                  green
                  card
                  onClick={()=>{setStep(2)}}
                  disabled = {
                    Moving_from === '' ||
                    from_Address_line_1=== '' ||
                    from_City=== '' ||
                    from_Postal_code=== '' ||
                    Moving_to=== '' ||
                    to_Address_line_1=== '' ||
                    to_City=== '' ||
                    to_Postal_code=== ''
                  }
                >
                  Next step
                </Button>
              </TextFieldsSquare>
            </div>
          }
          {
            step === 2 &&
            <div>
              <Title title="Fill the form" />
              <TextFieldsSquare>
                <FormControl component="fieldset">
                  <TextFieldTitle>How do you like to pay?</TextFieldTitle>
                  <RadioGroup 
                    row 
                    aria-label="position" 
                    name="position" 
                    defaultValue="top"
                    value={payement}
                    onChange={(event)=>{set_payement(event.target.value)}}
                  >
                    <FormControlLabel value="Cash on moving day" control={<Radio color="primary" />} label="Cash on moving day" />
                    <FormControlLabel value="Online" control={<Radio color="primary" />} label="Online"  />
                  </RadioGroup>
                </FormControl>
                <Input
                  title="Additional information about your move (optional)"
                  placeholder="E.g. parking issues, garage / shed / loft items, valuable items, large items"
                  multiline
                  long
                  value={Additional}
                  onChange={(event)=>{set_Additional(event.target.value)}}
                />

                <Button
                  card
                  onClick={()=>{setStep(1)}}
                  outlined
                  lastOnMobile
                >
                  previous step
                </Button>
                <Button
                  green
                  card
                  onClick={()=>{setStep(3)}}
                  disabled = {
                    payement === ''
                  }
                >
                  SUMMARY
                </Button>

              </TextFieldsSquare>
            </div>
          }
          {
            step === 3 &&
              <div>
                <Title title="Confirm your form" />
                <Confirm
                  First_name={First_name}
                  Last_name={Last_name}
                  E_mail={E_mail}
                  Phone_number={Phone_number}
                  Van_size={Van_size}
                  Helpers={Helpers}
                  Hours={Hours}
                  Moving_from={Moving_from}
                  from_Address_line_1={from_Address_line_1}
                  from_Address_line_2={from_Address_line_2}
                  from_City={from_City}
                  from_Postal_code={from_Postal_code}
                  Moving_to={Moving_to}
                  to_Address_line_1={to_Address_line_1}
                  to_Address_line_2={to_Address_line_2}
                  to_City={to_City}
                  to_Postal_code={to_Postal_code}
                  payement={payement}
                  Additional={Additional}
                  selectedDate={selectedDateString}
                />
                <TextFieldsSquare>
                  <Button
                    onClick={()=>{setStep(0)}}
                    outlined
                    card
                    lastOnMobile
                  >
                    EDIT STEPS
                  </Button>
                  <Button
                    green
                    card
                    onClick={()=>{
                      send({
                        First_name:First_name,
                        Last_name:Last_name,
                        E_mail:E_mail,
                        Phone_number:Phone_number,
                        Van_size:Van_size,
                        Helpers:Helpers,
                        Hours:Hours,
                        Moving_from:Moving_from,
                        from_Address_line_1:from_Address_line_1,
                        from_Address_line_2:from_Address_line_2,
                        from_City:from_City,
                        from_Postal_code:from_Postal_code,
                        Moving_to:Moving_to,
                        to_Address_line_1:to_Address_line_1,
                        to_Address_line_2:to_Address_line_2,
                        to_City:to_City,
                        to_Postal_code:to_Postal_code,
                        payement:payement,
                        Additional:Additional,
                        selectedDate:selectedDateString,
                      });
                      setStep(4);
                    }}
                  >
                    SEND YOUR BOOK-NOW
                  </Button>

                </TextFieldsSquare>
              </div>
          }
          {
            step === 4 &&
              <div>
                <Title title="Your book-now request was successfully sent" />
                <Text>
                  <p>We will confirm your booking as soon as possible</p>
                </Text>
              </div>
          }
    </PageTemplate>
  );
}

export default Prices;
