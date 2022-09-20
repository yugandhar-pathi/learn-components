import PropTypes from 'prop-types'
import {StyledButton} from './Button.styles'

export const Button = ({label, dataTestId, primary, secondary, ...props}) => {
    return <StyledButton data-testid={dataTestId} primary={primary} secondary={secondary} {...props}>{label}</StyledButton>
}

Button.propTypes = {
    dataTestId: PropTypes.string.isRequired,
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
