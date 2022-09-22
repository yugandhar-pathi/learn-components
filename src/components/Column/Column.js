import { ColumnStyle } from "./Column.styles"
import PropTypes from 'prop-types'

export const Column = ({children, dataTestId}) => {
    return(
        <ColumnStyle data-testid={dataTestId}>{children}</ColumnStyle>
    )
}

Column.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    dataTestId: PropTypes.string.isRequired  
}
