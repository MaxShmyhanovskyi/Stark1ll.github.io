import React from 'react';
import './BookTableForm.css'
import { useForm } from "react-hook-form";
import axios from '../../axios/axios';
import { useEffect } from 'react';

  export const BookTableForm = () => {
    
    const { register, handleSubmit,getValues,reset} = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '+380',
            seatCount: '',
            desiredDate: new Date().toISOString().slice(0, 10),
        }
    });

    

    const onSubmit = async data => {
        
        try {
        await axios.post('/bookings.json', data);
        alert(`Thank you, ${getValues('firstName')}! we're waiting for on ${getValues('desiredDate')}`);
        reset();
          
        } catch (e) {
        console.log(e)
            }
        }
   // CREATE VALIDATION INPUTS
    return (
      <div className='BookTable'>
          <span>Visit Us:</span>
          
          <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 20})} />
                <input type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 25})} />
                <input type="tel" placeholder="Phone: +380XXXXXXXXX" {...register("phoneNumber", {required: true,  pattern: /^[\+]?[0-9]{12}$/})} />
                <input type="number" placeholder="Seat Count" {...register("seatCount", {required: true, max: 25, min: 1})} />
                <input type="date" placeholder="Desired Date" {...register("desiredDate", {required: true, min: `${new Date()}`, max: '2022-08-31'})} />
                <button className='SumbitTableBooking bn22' type='sumbit'>Book a table!</button>
            </form>
            
      </div>
    )
  }
  