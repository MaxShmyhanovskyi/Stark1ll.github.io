import React from 'react'
import './Input.css'
import { ErrorMessage } from '@hookform/error-message'

export const Input = (props) => {

  return (
    <div className='Input'>
        <input type={props.type} placeholder={props.placeholder} 
                    {...props.register(
                      props.name, props.options,
                )} />
          <ErrorMessage as={<span />} errors={props.errors} name={props.name} className='ErrorMessage'/>
    </div>
  )
}
