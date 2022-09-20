import styled from 'styled-components'

export const StyledButton = styled.button`
 padding: ${(props) => props.secondary ? "8px" : "5px"};
 border-radius: '5px'; 
 background-color:${(props)=> props.primary ? "green" : ""}
`