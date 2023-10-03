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

 // Delete Task

 const deleteTask =(id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
 } 

 // Toggle Reminder
 const toggleReminder = (id) =>{
  setTasks(
    tasks.map((task)=> 
    task.id === id ? { ... task, reminder:!task.reminder}: task))
 }


  return (
    <div className="container">
      <Header  />
    {tasks.length > 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  />: 'No Tasks'}
    </div>
  )
}


export default App;
