import React from 'react'
import './Input.css'

export const Input = (props) => {

  return (
    <div className='Input'>
        <label>{props.label}</label>
        <input
            label={props.label}
            value={props.value}
            pattern={props.pattern}
            onChange={props.onChange}
            type={props.type}
        />
    </div>
  )
}
