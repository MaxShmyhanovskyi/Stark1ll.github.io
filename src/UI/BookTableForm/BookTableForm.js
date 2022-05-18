import React from 'react';
import './BookTableForm.css'
import { useForm } from "react-hook-form";
import axios from '../../axios/axios';
import { useEffect } from 'react';

  export const BookTableForm = () => {
    
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({
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
          <span className='BookTableTitle'>Visit Us:</span>
          
          <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First name" {...register("firstName", 
                  {required: "First Name required", maxLength: 20})}
                />
                {errors.firstName && <span className='ErrorMessage'>{errors.firstName.message}</span>}

                <input type="text" placeholder="Last name" {...register("lastName", 
                  {required: "Last Name required", maxLength: 25})} 
                />
                {errors.lastName && <span className='ErrorMessage'>{errors.lastName.message}</span>}

                <input type="tel" placeholder="Phone: +380XXXXXXXXX" {...register("phoneNumber", 
                  {required: "Phone number required",  pattern: /^[\+]?[0-9]{12}$/})}
                />
                {errors.phoneNumber && <span className='ErrorMessage'>{errors.phoneNumber.message}</span>}

                <input type="number" placeholder="Seat Count" {...register("seatCount", 
                  {required: "Please, Choose seats count", max: 25, min: 1})}
                />
                {errors.seatCount && <span className='ErrorMessage'>{errors.seatCount.message}</span>}

                <input type="date" placeholder="Desired Date" {...register("desiredDate", 
                  {required: "Please, set the date of a visit", min: `${new Date().toISOString().slice(0, 10)}`, max: '2022-08-31'})}
                />
                {errors.desiredDate && <span className='ErrorMessage'>{errors.desiredDate.message}</span>}

                <button className='SumbitTableBooking bn22' type='sumbit'>Book a table!</button>
            </form>
            
      </div>
    )
  }
  