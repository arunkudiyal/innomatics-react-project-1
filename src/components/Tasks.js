const tasks = [
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
]

const Tasks = () => {

    // Array.map( (var) => { JS } ) <-----> Array.map( (var) => ( JS ) )

    return (
        <>
           {tasks.map((task) => (
               <h3 key={task.id}>{task.text}</h3>
           ))}
        </>
    )
}

export default Tasks
