import PropTypes from 'prop-types'
// How to create component
// 1. Functions-Based Components
// 2. Class-Based Components

// 1. Function-Based Compoennt
const Header = ( {title, id} ) => {
    // Properties 
    // const name = 'Arun'

    return (
        // JSX
        <header>
            <h1> {title} </h1> <span>{id}</span>
            <br />
        </header>
    )
}

// Header.defaultProps = {
//     title: 'Default Title'
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number
}


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