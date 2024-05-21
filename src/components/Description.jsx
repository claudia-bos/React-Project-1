//5
import React from 'react'

//the way we are rendering this component is based off 
// we are in edit mode or not

const Description = ({isEditing, value, setDescription}) => {

  if(isEditing){
    return <td>
    <input type="text" value={value} onChange={(e) => setDescription(e.target.value)}/>
    </td>
  }else {
    return <td>{value}</td>
  }
   
}

export default Description