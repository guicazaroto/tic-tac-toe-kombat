import styled from "styled-components"

const BtnBase = styled.button`
  margin: 0.3rem 0;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: .5rem 2rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:disabled {
    background-color: gray;
  }
`

export const BtnPlayStyles = styled(BtnBase)<{ disabled?: boolean}>`
  background-color: #ec7905;

  ${({disabled }) => !disabled && ` 
    &:hover {
      background-color: #ee8505fe;
    }
  `}
`


export const BtnResetStyles = styled(BtnBase)`
 background-color: #059146;

 ${({disabled }) => !disabled && ` 
    &:hover {
      background-color: #059146d8;
    }
  `}
`
