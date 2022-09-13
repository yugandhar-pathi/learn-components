import PropTypes from 'prop-types'

const TextSize = {
    small: '18px',
    medium: '22px',
    large: '26px'
}

export const Text = ({ size, dataTestId, children }) => {
    const data = TextSize[size]
    return (
        <p data-testid={dataTestId} style={{fontSize:`${data}`, lineHeight:`${data}`}}>{children}</p>
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

