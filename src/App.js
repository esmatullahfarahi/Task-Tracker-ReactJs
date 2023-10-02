import { useState } from 'react';
import Header from "./components/Header"; 
import Tasks from "./components/Tasks"; 
const App=() => {
    const [tasks, setTasks]= useState([

    {
       id:1,
       text: 'Doctor Appointment',
       day: ' Feb 5th',
       reminder: true,
    },
     {
       id:2,
       text: 'Meeting at School',
       day: ' Feb 6th',
       reminder: true,
    },
     {
       id:3,
       text: 'Food Shopping',
       day: ' Feb 5th',
       reminder: false,
    },
])

  return (
    <div className="container">
      <Header  />
      <Tasks tasks={tasks} />
    </div>
  )
}


export default App;
