import React from 'react'

const Hours = ({isEditing, value, setHours}) => {

  if(isEditing){
    return <td className='hours-cell'>
      <input type="text" value={value} onChange={(e) => setHours(e.target.value)}/>
    </td>
  } else {
    return <td className='hours-cell'>{value}</td>
  }

}

export default Hours