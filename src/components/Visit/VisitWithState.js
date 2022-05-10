import React from 'react'
import './Visit.css'
import { ContainerTop } from '../Containers/ContainerTop/ContainerTop'
import { useState } from 'react'
import { Input } from '../../UI/Input/Input'
import axios from '../../axios/axios'
import { BookTableForm } from '../../UI/BookTableForm/BookTableForm'

export const Visit = (event) => {
  const [state,setState] = useState({
    fullName : {label: 'Full Name', type: 'text', value: ''},
    phone: {label: 'Phone number',type: 'tel', pattern: "/[0-9]{3} [0-9]{3} [0-9]{4}/gi", value: '', required: true},
    seatsCount: {label: 'Visitors count', type: "number", value: ''},
    date: {label: 'Desired date',type: 'date', value: ''},
  });

  const assignBookingsValues = () => {
    const tableInfo = [];
    Object.values(state).forEach(fieldInfo => {
      tableInfo.push([fieldInfo.label,fieldInfo.value])
    })
    return Object.fromEntries(tableInfo)
  }

  
  const sumbitTableBooking = async event => {
    event.preventDefault();
    
    try {
      await axios.post('/bookings.json', assignBookingsValues());
      console.log('SUCCESS')
      setState({
        fullName : {label: 'Full Name:', type: 'text', value: ''},
        phone: {label: 'Phone number:',type: 'tel', value: ''},
        seatsCount: {label: 'Visitors count:', type: "number", value: ''},
        date: {label: 'Desired date:',type: 'date', value: ''}
      })
    } catch (e) {
      console.log(e)
    }
  }
  
  const handleChangeValue = (event,inputName) => {
    setState(prevState => {
      return {
        ...prevState,
        [inputName] : {
          label: prevState[inputName].label,
          value : event.target.value,
          required: prevState[inputName].required
          }
        }
    })
  }
  
  const sumbitHandler = (event) => {
    event.preventDefault();
  }

  const renderInputs = () => {
    return Object.keys(state).map((inputName, index) => {
      return (
        <Input
          key={index}
            label={state[inputName].label}
            type={state[inputName].type}
            value={state[inputName].value}
            onChange={event => handleChangeValue(event,inputName)}
            required
          />
      )
    })
  }
  // console.log(assignBookingsValues()  )

  return (
    <div className='Visit'>
        <ContainerTop />
        <BookTableForm />
        {/* <form className='BookingForm' onSubmit={event => sumbitHandler()}>
          <span>Book a Table</span>
          <hr/>
          {renderInputs()}
          
          <button className='SumbitTableBooking bn22' onClick={event => sumbitTableBooking(event)}>Book a table!</button>
        </form> */}
    </div>
  )
}
