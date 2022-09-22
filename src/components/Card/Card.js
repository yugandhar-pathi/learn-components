import PropTypes from 'prop-types'
import {CardStyle} from './Card.styles'
import {Column} from '../Column/Column'

export const Card = ({heading, content, picture, buttonName, altText, dataTestId}) => {

    return(
       <CardStyle data-testid={dataTestId}>
           <Column dataTestId={`col-${dataTestId}`}>
               <h2 data-testid={`header-${dataTestId}`}><b>{heading}</b></h2>
               {
                (content && picture) ? 
                <div>
                    <div>{content}</div>
                    <img src={picture} alt={altText} width="100%"/>
                </div> :
                <div>{content || <img src={picture} alt={altText} width="100%"/>}</div>
               }
               <button data-testid={`button-${dataTestId}`} style={{border:"none", color:"blue"}}>{buttonName}</button>  
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


