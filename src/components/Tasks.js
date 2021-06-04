import Task from "./Task"
const Tasks = ({ tasks, onDelete, onToggle }) => {

    // Array.map( (var) => { JS } ) <-----> Array.map( (var) => ( JS ) )

    return (
        <>
           {tasks.map((task) => (
               <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
           ))}
        </>
    )

    // REACT HOOKS - State Management - Problem Sattement - Solution
}

export default Tasks
