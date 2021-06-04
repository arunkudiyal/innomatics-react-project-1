// Hooks
import { useState } from 'react'

// const taaks = [ {}, {}, {} ] -> Property

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {

  // GLOBAL STATE
  // Tasks State
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Vaccine Appointment',
        day: 'April 1st, 2021 at 5 PM',
        reminder: true
    },
    {
        id: 2,
        text: 'Assignment',
        day: 'April 4th, 2021 at 10 AM',
        reminder: false
    },
    {
        id: 3,
        text: 'Project Submission',
        day: 'April 3rd, 2021 at 12 PM',
        reminder: false
    },
    {
        id: 4,
        text: 'Meeting with the Team',
        day: 'April 2nd, 2021 at 6 PM',
        reminder: true 
    }
  ])

  // Delete the task
  const onDelete = (id) => {
    // Manipulate the tasks state - setTasks()
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // Manipulate the tasks state - setTasks()
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }


  return (
    // JSX 
    <div className="container">
      <Header tasks={tasks} title='Task Tracker' />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /
      >) : ('No Tasks to Show...')}
    
    </div>

    // <h2>Trying to chcek...</h2> -> Cannot do that
  );
}

export default App;
