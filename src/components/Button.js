import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {

    // SAME FOR EVERY BUTTON | Bring event as a Prop
    // const onClick = () => {
    //     console.log('New Event');
    // }

    return (
        <button 
        onClick={onClick}
        style={{ backgroundColor: color }} 
        className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'black',
    text: 'Button'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button
