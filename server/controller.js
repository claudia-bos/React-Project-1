
let jobsData = [
    {id: 0, company: 'Target', description: 'Customer support Specialist', rate: 11,  hours: 8},    
    {id: 1, company: 'virtual Sherpa', description: 'Project Manager', rate: 18, hours: 12},
    {id: 2, company: 'Bos comunity services', description: 'Ghrapic Designer', rate: 25, hours: 12},
    {id: 3, company: 'VS llc', description: 'Sells Specialist', rate: 32, hours: 14}
  ];

let globalId = 4

const handlerFuctions = {
    getJobs: (req, res) => {
        res.status(200).send(jobsData)
    },
    addJob: (req, res) => {
        const newRow = req.body
        
        newRow.id = globalId

        jobsData.push(newRow)

        globalId++

        res.status(200).send(jobsData)
    },
    deletePost: (req, res) => {
        const {id} = req.params

        jobsData = jobsData.filter((el) => el.id != id)

        res.status(200).send(jobsData)
    },
    editJob: (req, res) => {
        const {id} = req.params
        const editJob = req.body
        
        editData.id = id
        editData.isEditing = false

        const index = jobsDataCopy.findIndex((el) => el.id === +id)
        jobsDataCopy.splice(index, 1, editJob)

        
        res.status(200).send(jobsData)
    }
}

export default handlerFuctions