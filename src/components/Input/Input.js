import PropTypes from 'prop-types'
import { LabelStyle, InputStyle } from './Input.styles'

export const Input = ({text, styleType, placeHolder, dataTestId, type}) =>{

    return(
        <div data-testid={dataTestId}>
        <LabelStyle>{text}</LabelStyle>
        <InputStyle styleType={styleType} type={type} placeholder={placeHolder}/>
        </div>
    )
}

Input.propTypes = {
 styleType : PropTypes.oneOf(["basic", "outlined", "filled"]),
 placeHolder : PropTypes.string.isRequired,
 text : PropTypes.string.isRequired,
 dataTestId: PropTypes.string.isRequired,
 type : PropTypes.string.isRequired
}

Input.defaultProps = {
    styleType: "basic" ,
    placeHolder: "Enter Your Input" 
}