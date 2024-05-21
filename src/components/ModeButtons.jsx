// 1

import React from 'react'

//Im destructuring my editable objects inside the ModeButtons function 
//this is saying look inside the properties of the object and find 'isEditing' property,
//create a constant variable named 'isEditing' and assign it the value of 'props.isEditing'

const ModeButtons = ({isEditing, setEditMode, setNormalMode, deleteJobRow}) => {

    // const {isEditing} = props

    //this is saying if we are in edit mode i want to return a table data with a button named Post Job...
    

    if(isEditing){
        return <td>
            <button onClick={setNormalMode} className='mode-button'>Save Changes</button>
        </td>
    } else {
        return <td>
           <button onClick={deleteJobRow}  className='mode-button'>Delete</button>
           <button onClick={setEditMode}  className='mode-button'>Edit</button>
           <button className='mode-button'>Apply</button>
        </td>
     
    }
}

export default ModeButtons











