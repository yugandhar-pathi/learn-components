import styled from 'styled-components'

const TextSize = {
    small: '18px',
    medium: '22px',
    large: '26px'
}


export const TextStyle = styled.p`
   font-size: ${(props) => TextSize[props.size]};
   line-height: ${(props) => TextSize[props.size]};
`