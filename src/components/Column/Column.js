const Column = ({children}) => {
    let columnStyle = {
        display: "flex",
        flexDirection:"column"
    }
    return(
        <div style={columnStyle}>{children}</div>
    )
}
export default Column;