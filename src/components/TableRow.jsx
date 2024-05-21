import React from 'react'
import ModeButtons from './ModeButtons'
import Description from './Description'
import Company from './Company'
import Hours from './Hours'
import Rate from './Rate'
//import formatCurrency from '../formatCurrency'
import { useState } from 'react'



const TableRow = ({initialIsEditing, initialCompany, initialDescription, initialRate, initialHours, deleteJobRow, editJobsRow, id}) => {
  const [isEditing, setIsEditing] = useState(initialIsEditing)
  const [company, setCompany] = useState(initialCompany)
  const [description, setDescription] = useState(initialDescription)
  const [rate, setRate] = useState(initialRate)
  const [hours, setHours] = useState(initialHours)
  // this will initialize the variable isEditing , company, description... with their initial value, and then will create a function called setIsEditing, and the others...
  //to update its value(Based on the value of isEditing, the component conditionally renders either an input field (for editing) or plain text (for viewing).)

  const setEditMode = () => {
    setIsEditing(true)
  }

  const setNormalMode = () => {
    setIsEditing(false)

    const editedRow = {
      id: id,
      description: description,
      rate: rate,
      hours: hours
    }

    editJobsRow(id, editedRow)
  }

  return (
    <tr>
      <Company 
        isEditing={isEditing} 
        value={company}
        setCompany={setCompany}
       />
      <Description 
        isEditing={isEditing}
        value={description}
        setDescription={setDescription}
       />
      <Rate 
        isEditing={isEditing}
        value={rate}
        setRate={setRate}
       /> 
      <Hours 
        isEditing={isEditing}
        value={hours} 
        setHours={setHours}
      />
      <ModeButtons 
        isEditing={isEditing} 
        setEditMode={setEditMode} 
        setNormalMode={setNormalMode} 
        deleteJobRow={deleteJobRow}
      />

  </tr>
  )
}
// from our destructuring method we look over every of those props
// so we pass it to our componentes and assig whatever value they got that is being send
// for example to our tablerow variable we will tell to look for description properti in the objects array
// then we will pass it with return inside the <tr></tr>
// we look for our description component and we assign it the value of their property
// if we want to calculate the total amount we will make use this fromula and import formatCurrency to display in the server <td>{formatCurrency(rate * hours)}</td>

export default TableRow