// Hooks
import { useState, useEffect } from 'react'

// const taaks = [ {}, {}, {} ] -> Property

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {

  // GLOBAL STATE | App-Level State
  // Tasks State
  const [tasks, setTasks] = useState([])

  // presesnt data the moment application is loaded
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()

      // Seeting the data coming from the server as our app-level state
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch all the data from the back-end
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks', {method: 'GET'})
    const data = await res.json()

    return data
  }  

  // Add the task
  const addTask = async (task) => {
    // POST the newTask to the server
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    // Reflect the changes from the server to the states
    setTasks([...tasks, data])

    // We donot have an ID | Generating an ID
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }

    // Add the newTask and add it in the tasks State
    // setTasks([...tasks, newTask])
  }

  // Delete the task
  const onDelete = async (id) => {
    // Deleting the data from the server
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

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
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /
      >) : ('No Tasks to Show...')}
    
    </div>

    // <h2>Trying to chcek...</h2> -> Cannot do that
  );
}

export default App;
