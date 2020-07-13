import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color:  ${(props) => props.disabled !== true ? "#FFFFFF" : "#a6a6a6"};
  margin: 0px 14px;
  height: 20px;
  display: flex; 
  width : 200px;
  border-radius: 6px;
`

export const ContentWrapper = styled.div`
  border-radius: 6px;
  background-color: #00a5ba;
  width:  ${(props) => parseInt(props.progressNumber) === 6 ? 100 : props.progressNumber * 16.5}%;
`

