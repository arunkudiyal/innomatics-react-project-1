import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import Button from './Button'
// How to create component
// 1. Function-Based Components
// 2. Class-Based Components

// 1. Function-Based Compoennt
const Header = ( {title, tasks} ) => {

    const location = useLocation()

    // Properties 
    // const name = 'Arun'

    const onClick1 = (e) => {
        console.log('Adding the tasks...');
        console.log(tasks)
        // console.log(e);
    }

    return (
        // JSX
        <header className='header'>
            <h1> {title} </h1>
            {location.pathname === '/' && ( <Button onClick={onClick1} text='Add' /> )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number
}

// CSS in JSX
// const headingStyles = {
//     color: 'blue', 
//     backgroundColor: 'black'
// }

// 2. Class-Based Component
// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//              <h1>Hello... I am a header which is class based...</h1>
//             </header>
//         )
//     }
// }

export default Header