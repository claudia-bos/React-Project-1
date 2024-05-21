//  Import packages
import express from 'express'
import ViteExpress from 'vite-express'
import handlerFuctions from './controller.js'

// create express instance

const app = express()

//set up middleware (//javascript object notation =json -> this is how we send data from front to back)

app.use(express.json())


//ENDPOINTS
// 1 pass the objects array from JobsTable.jsx to the endpoints section, and i also change the name from initialJobsData to jobsData

// const jobsData = [
//     {id: 0, company: 'Target', description: 'Customer support Specialist', rate: 11,  hours: 8},    
//     {id: 1, company: 'virtual Sherpa', description: 'Project Manager', rate: 18, hours: 12},
//     {id: 2, company: 'Bos comunity services', description: 'Ghrapic Designer', rate: 25, hours: 12},
//     {id: 3, company: 'VS llc', description: 'Sells Specialist', rate: 32, hours: 14}
//   ];

// let globalId = 4

const {getJobs, addJob, deletePost, editJob} = handlerFuctions
//im destructuring the addJob that is in controller.js file

app.get('/jobs', getJobs)
// we past it to controller.js
app.post('/newJob', addJob)
//setting our delete endpoint
app.delete('/badPost/:id', deletePost)
app.put('/updateJob/:id', editJob)


//open door to server with .listen()
ViteExpress.listen(app, 9002, () => console.log('server level OVER 9000! View at http://localhost:9002'))