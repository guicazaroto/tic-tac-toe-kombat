import styled from "styled-components"

export const Game = styled.div`
  text-align: center;
`
export const GameTitle = styled.h1`
  font-size: 3rem;
  margin: .5rem 0;
  background: -webkit-linear-gradient(#fc2c03, #ad0f0f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const GameContainer = styled.div`
  margin: auto;
  display: grid;
  column-gap: .5rem;
  row-gap: .5rem;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 10px;
  background: linear-gradient(to left, red, orange);
`

export const TicTacSpace = styled.div<{ source?: String }>`
${({ source }) => source &&  `background-image: url(/avatars/${source}.png)`};
  
  width: 150px;
  height: 150px;
  background-color: #000;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:nth-child(1) {
    border-top-left-radius: 10px;
  }

  &:nth-child(3) {
      border-top-right-radius: 10px;
  }

  &:nth-child(7) {
      border-bottom-left-radius: 10px;
  }        

  &:nth-child(9) {
      border-bottom-right-radius: 10px;
  }
`

export const PlayersContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`