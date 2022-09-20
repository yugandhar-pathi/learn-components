import PropTypes from 'prop-types'
import {RowStyle} from './Row.styles'

export const Row = ({justifyContent, dataTestId, children}) => {
    
    return(
        <RowStyle data-testid={dataTestId} justifyContent={justifyContent}>{children}</RowStyle>
    )
}

Row.propTypes = {
    justifyContent: PropTypes.oneOf(["space-between", "space-around", "center"]),
    children :  PropTypes.arrayOf(PropTypes.element).isRequired,
    dataTestId : PropTypes.string.isRequired
}

Row.defaultProps = {
    justifyContent : "space-around"
}
