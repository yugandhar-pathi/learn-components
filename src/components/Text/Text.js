import PropTypes from 'prop-types'
import {TextStyle} from './Text.styles'


export const Text = ({ size, dataTestId, children }) => {
  
    return (
        <TextStyle data-testid={dataTestId} size={size}>{children}</TextStyle>
    )
}

Text.propTypes = {
    /*Text to be printed*/
    children: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small","medium","large"]),
    dataTestId: PropTypes.string.isRequired,
}

Text.defaultProps = {
    size: "medium"
}

