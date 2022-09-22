import PropTypes from 'prop-types'

export const Typography = ({dataTestId, variant1, variant2, variant3, variant4, variant5, variant6, text}) =>{
    let val;
    if(variant1){
      val =  <h1>{text}</h1>
    }
    if(variant2){
        val =  <h2>{text}</h2>
      }
      if(variant3){
        val =  <h3>{text}</h3>
      }
      if(variant4){
        val =  <h4>{text}</h4>
      }
      if(variant5){
        val =  <h5>{text}</h5>
      }
      if(variant6){
        val =  <h6>{text}</h6>
      }
    return(
        <p data-testid={dataTestId}>{val}</p>
    )
}

Typography.propTypes = {
variant1: PropTypes.string,
variant2: PropTypes.string,
variant3: PropTypes.string,
variant4: PropTypes.string,
variant5: PropTypes.string,
variant6: PropTypes.string,
Text: PropTypes.string,
dataTestId: PropTypes.string.isRequired
}