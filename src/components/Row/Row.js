import PropTypes from 'prop-types'

export const Row = ({justifyContent, dataTestId, children}) => {
    let rowStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: `${justifyContent}`
    }
    return(
        <div data-testid={dataTestId} style={rowStyle}>{children}</div>
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
