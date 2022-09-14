const Row = ({children}) => {
    let rowStyle = {
        display: "flex",
        flexDirection: "row"
    }
    return(
        <div style={rowStyle}>{children}</div>
    )
}

export default Row;