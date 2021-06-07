import { useState } from "react"

const AddTask = ({ onAdd }) => {

    // Component-Level States | Hold the user input
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        // Every form hits to a server but we do not want that 
        e.preventDefault()

        // Add some form-validation
        if(!text) {
            alert('No Task to Add... Please add a Task')
        }

        onAdd({text, day, reminder})

        // Reset the form
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    value={text} 
                    placeholder='Add Task'
                    onChange={ (e) => setText(e.target.value) } 
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type="text" 
                    value={day} 
                    placeholder='Add Day & Time' 
                    onChange={ (e) => setDay(e.target.value) }
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    value={reminder} 
                    type="checkbox" 
                    onChange={ (e) => setReminder(e.currentTarget.checked) }
                />
            </div>

            <input type="submit" value="Save Task!" className='btn btn-block' />
        </form>
    )
}

export default AddTask
