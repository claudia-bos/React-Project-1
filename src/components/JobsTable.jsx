import {useState, useEffect} from 'react'
import ModeButtons from './ModeButtons'
import Description from './Description'
import Company from './Company'
import Hours from './Hours'
import Rate from './Rate'
import TableRow from './TableRow'
import TableHeader from './TableHeader'
import AddButton from './AddButton'
import './JobsTable.css'
import axios from 'axios'

//so in order to display all the parts of my table
//I need to import all of them -> remember the previus ui design


//we change the name from jobsTable to initialJobsData so we can add a new row to our data when it is requested (push a new row in our object )implement useState
// const initialJobsData = [
//   {id: 0, company: 'Target', description: 'Customer support Specialist', rate: 11,  hours: 8},    
//   {id: 1, company: 'virtual Sherpa', description: 'Project Manager', rate: 18, hours: 12},
//   {id: 2, company: 'Bos comunity services', description: 'Ghrapic Designer', rate: 25, hours: 12},
//   {id: 3, company: 'VS llc', description: 'Sells Specialist', rate: 32, hours: 14}
// ];
//this jobsData was inside the jobsTable fuction but i moved it outside
//because we want to be able to edit those filds
// let globalId = 4

const JobsTable = () => {

  const [jobsData, setJobsData] = useState([])

  useEffect(() => {
    console.log('Jobs Data Array', jobsData);

    axios.get('/jobs')
      .then((res) => {
        setJobsData(res.data)
      })

  }, [])


  const addJobRow = () => {
    // const jobsDataCopy = [...jobsData]

    const newRow = {
      // id: globalId,
      company: 'Add Company',
      description: 'Add Job Offer',
      rate: '0',
      hours: '0'
    }
    axios.post('/newJob', newRow)
    .then((res) => {
      setJobsData(res.data)
    })

    // jobsDataCopy.push(newRow)
    // setJobsData(jobsDataCopy)

    // globalId++
  }

  const deleteJobRow = async (id) => {
    //make a copy of JobsData array
    //locate the object in array that i want to delete
    //Filter out all elements that have a matching id
    //set testData state to be the new, edited array

    const newJobArray = await axios.delete(`/badPost/${id}`)

    setJobsData(newJobArray.data)
  }

  //here we will create a function that can actully put the new and edited data in the data that is in our object array (rows)
  //here we will need an id to specife which row we are editing , also a body to specife which object i am taking
  const editJobsRow = (id, body) => {
    // const jobsDataCopy = [...jobsData]

    // const index = jobsDataCopy.findIndex((el) => el.id === id)
    // jobsDataCopy.splice(index, 1, body)
    // setJobsData(jobsDataCopy)

    //that was pass tp controller.js into editJob property
    axios.put(`updateJob/${id}`, body)
      .then((res) => {
        setJobsData(res.data)
      })
  }


  const rows = jobsData.map((el) => <TableRow 
    initialIsEditing={el.isEditing} // i set this to false because we dont want that edit mode is display in the site automatically but if it is requested
    initialCompany={el.company}
    initialDescription={el.description}
    initialRate={el.rate}
    initialHours={el.hours}
    key={el.id} //this one is just used when we are maping 
    deleteJobRow={() => deleteJobRow(el.id)} // this will make the delete option run  just when it is been request 
    editJobsRow={editJobsRow}
    id={el.id}
  />)


  return (
    <table>
      <thead>
        <TableHeader />  
      </thead>
      <tbody>
        {rows}
        {/* <tr>
          <Company isEditing={false} value={"Target"}/>
          <Description isEditing={false} value={"Support Customer Specialist"} />
          <Rate isEditing={false} value={10} /> 
          <Hours isEditing={false} value={5}/>
          <ModeButtons isEditing={false} />
        </tr>
        <tr>
          <Company isEditing={true} value={"Virtual Sherpa"}/>
          <Description isEditing={true} value={"Project Manager"} />
          <Rate isEditing={true} value={18} /> 
          <Hours isEditing={true} value={12}/>
          <ModeButtons isEditing={true} />
        </tr> 
        // now that we pass the information from the jobsData we delete this part that we previous create
        // because we are going to map over the jobsData and create a table row for each of them
        // so to do that i have to import my TableRow.jsx
        */}
      </tbody>
      <tfoot>
        <AddButton addJobRow={addJobRow}/>
      </tfoot>
    </table>
  )
}

export default JobsTable