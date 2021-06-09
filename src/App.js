// Hooks
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// const taaks = [ {}, {}, {} ] -> Property

import Footer from './components/Footer';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import About from './components/About';

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

  // Fetch a particular task with the id
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
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
  const toggleReminder = async (id) => {
    // Get the data from the server and create an updatedTask
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    // Update the server by sending a PUT request
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    // Manipulate the tasks state - setTasks()
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
    )
  }


  return (
    // JSX 
    <Router>
      <div className="container">
        <Header tasks={tasks} title='Task Tracker' />
      
        <Route path='/' exact render={(props) => (
          <>
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (
              <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /
            >) : ('No Tasks to Show...')}
          </>
        )} />  

        <Route path='/about' component={About} />  
        <Footer />
      </div>
    </Router>
    

    // <h2>Trying to chcek...</h2> -> Cannot do that
  );
}

export default App;
