import React from 'react'

const AddButton = ({addJobRow}) => {

  return (
   <tr>
    <td colSpan={4} >
      <button onClick={addJobRow} className='post-cell'>New Post</button>
    </td>
    <td></td>
   </tr>
  )
}

export default AddButton

// colSapn it is used to say how many columns i would like my button to take
