import styled from 'styled-components'

export const Wrapper = styled.div`
justify-content: center;
`

export const ContentWrapper = styled.div`
width : 60%;
margin-left: 20%;
`

export const FooterWrapper = styled.div`
justify-content: center;
height: 30px;
 display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.65);
`


export const PreviousButton = styled.button`
  background-color:  ${(props) => props.disabled !== true ? "#FFDC71" : "#dddddd"} ;
  color: white;
  height: 25px;
  width: 100px;
  border-radius: 3px;
  border: none;
`


export const NextButton = styled.button`
  background-color:  ${(props) => props.disabled !== true ? "#6DD0E5" : "#dddddd"} ;
  color: white;
  height: 25px;
  width: 100px;
  border-radius: 3px;
  border: none;
`
