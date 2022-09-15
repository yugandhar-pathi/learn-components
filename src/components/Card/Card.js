import PropTypes from 'prop-types'

export const Card = ({heading, content, picture, buttonName, altText}) => {
    const cardStyle = {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        width: "20%",
        margin: "1%"
    }

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "6%"
    }


    return(
       <div style={cardStyle}>
           <div style={divStyle}>
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
            </div>         
        </div>
    )
}

Card.propTypes = {
    heading: PropTypes.string.isRequired,
    content: PropTypes.string,
    buttonName: PropTypes.string.isRequired,
    altText: PropTypes.string
}