//6
import React from 'react'

const Company = ({isEditing, value, setCompany}) => {

  if(isEditing){
    return <td>
      <input type="text" value={value} onChange={(e) => setCompany(e.target.value)}/>
    </td>
  } else {
    return <td>{value}</td>
  
  }
}

export default Company