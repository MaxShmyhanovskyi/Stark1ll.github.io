import React from 'react'
import './Visit.css'
import { ContainerTop } from '../Containers/ContainerTop/ContainerTop'
import { BookTableForm } from '../../UI/BookTableForm/BookTableForm'

export const Visit = (event) => {

  return (
    <div className='Visit'>
        <ContainerTop />
        <BookTableForm />
    </div>
  )
}
