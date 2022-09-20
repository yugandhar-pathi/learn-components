import PropTypes from 'prop-types'
import {StyledButton} from './Button.styles'

export const Button = ({label, primary, secondary, ...props}) => {
    return <StyledButton  primary={primary} secondary={secondary} {...props}>{label}</StyledButton>
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
