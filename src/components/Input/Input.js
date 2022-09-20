import PropTypes from 'prop-types'
import { LabelStyle, InputStyle } from './Input.styles'

export const Input = ({text, styleType, placeHolder}) =>{

    return(
        <div>
        <LabelStyle>{text}</LabelStyle>
        <InputStyle styleType={styleType} placeholder={placeHolder}/>
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