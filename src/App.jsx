//2
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobsTable from './components/JobsTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    //so every isEditing result is because our if statement , the first return a post Job button because is true
    //and the second returns delete and edit buttons for the else statement. see more in ModeButtons.jsx
   <>
   <h1>TalentHunt</h1>
   <JobsTable />
   </>
  )
}

export default App
