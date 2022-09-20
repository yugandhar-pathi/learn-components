import styled from 'styled-components'

export const LabelStyle = styled.label`
 color : black;
 font-size : 20px;
`
export const InputStyle = styled.input`
  width: 25%;
  height: 40px;
  border:${(props) => props.styleType === "basic" ? "1px solid black" : ""};
  border:${(props) => props.styleType === "outlined" ? "2px solid black" : ""};
  color:${(props) => props.styleType === "outlined" ? "blue" : ""};
  background-color:${(props) => props.styleType === "filled" ? "gray" : ""};
  color:${(props) => props.styleType === "filled" ? "green" : ""};
`