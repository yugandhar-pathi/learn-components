import PropTypes from 'prop-types'
import {CardStyle} from './Card.styles'
import {Column} from '../Column/Column'

export const Card = ({heading, content, picture, buttonName, altText}) => {

    return(
       <CardStyle>
           <Column>
               <h2><b>{heading}</b></h2>
               {
                (content && picture) ? 
                <div>
                    <div>{content}</div>
                    <img src={picture} alt={altText} width="100%"/>
                </div> :
                <div>{content || <img src={picture} alt={altText} width="100%"/>}</div>
               }
               <button style={{border:"none", color:"blue"}}>{buttonName}</button>  
            </Column>         
        </CardStyle>
    )
}

Card.propTypes = {
    heading: PropTypes.string.isRequired,
    content: PropTypes.string,
    buttonName: PropTypes.string.isRequired,
    altText: PropTypes.string
}


