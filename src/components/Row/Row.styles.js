import styled from 'styled-components'

export const RowStyle = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: ${(props)=> props.justifyContent}
`