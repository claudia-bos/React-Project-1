//3
import React from 'react'
import formatCurrency from '../formatCurrency'

const Rate = ({isEditing, value, setRate}) => {

  if(isEditing){
    return <td className='rate-cell'>
      <input 
      type="text"
      value={value} 
      onChange={(e) => setRate(e.target.value)}/>
    </td>
  } else {
    return <td className='rate-cell'>{formatCurrency(value)}</td>
  }
  //Using <td>{formatCurrency(value)}</td>, so whatever value we have sent through 
  //it is going to pull it in common Us currency
}

export default Rate