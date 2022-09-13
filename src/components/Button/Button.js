import PropTypes from 'prop-types'

export const Button = ({label, primary, secondary, ...props}) => {
    let style = {
        padding: '5px',
        borderRadius: '5px',
    }
    if(primary) {
        style.backgroundColor = "green"
        style.color = "white"
    }
    if(secondary){
        style.padding = "8px"
    }
    return <button style={style} {...props}>{label}</button>
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"])
}

Button.defaultProps = {
    primary: false,
    secondary: false,
    size: "small"
}
