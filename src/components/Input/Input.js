import PropTypes from 'prop-types'

export const Input = ({text, basic, outlined, filled, placeHolder}) =>{

    const myStyle ={
        width: "25%",
        height: "40px"
    } 

    const textStyle = {
        color : "black",
        fontSize : "20px"
    }

    if(basic){
      myStyle.border = "1px solid black";
    }

    if(outlined){
        myStyle.border = "2px solid black";
        textStyle.color = "blue";
    }

    if(filled){
        myStyle.backgroundColor = "gray";
        textStyle.color = "green";
    }
    
    return(
        <div>
        <div style={textStyle}>{text}</div>
        <input style={myStyle} placeholder={placeHolder} />
        </div>
    )
}

Input.propTypes = {
 styleType : PropTypes.oneOf(["basic", "outlined", "filled"]),
 placeHolder : PropTypes.string.isRequired,
 text : PropTypes.string.isRequired
}

Input.defaultProps = {
    styleType: "basic" ,
    placeHolder: "Enter Your Input" 
}