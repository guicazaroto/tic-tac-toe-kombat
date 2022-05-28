import { useEffect, useState } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const Game = styled.div`
  text-align: center;
`
const GameTitle = styled.h1`
  font-size: 3rem;
  margin: .5rem 0;
  background: -webkit-linear-gradient(#fc2c03, #ad0f0f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const GameContainer = styled.div`
  margin: auto;
  display: grid;
  column-gap: .5rem;
  row-gap: .5rem;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 10px;
  background: linear-gradient(to left, red, orange);
`

const TicTacSpace = styled.div<{ source?: String }>`
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

type LocationProps = {
  state: {
    players: [string, string];
  };
};


export function GamePlay () {
  const winnerPositions = [[3,4,5], [0,1,2], [1,4,7], [6,7,8], [0,3,6], [2,4,6], [2,5,8], [0,4,8]]

  const { state } = useLocation() as unknown as LocationProps;
  const { players } = state
  
  const [tictacInputs, setTictacInputs] = useState(['', '', '', '', '', '', '', '', ''])
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [winners] = useState({
    [players[0]]: 0,
    [players[1]]: 0
  })


  useEffect(() => {
    const lastPlayer = players[currentPlayer ? 0 : 1]

    checkIfHasWinner(lastPlayer)
  }, [tictacInputs])

  function makePlay (position: number) {
    if (tictacInputs[position]) return

    const newArr = [...tictacInputs]
    newArr[position] = players[currentPlayer]

    setTictacInputs(newArr)
    setCurrentPlayer(currentPlayer ? 0 : 1)
  }

  function checkIfHasWinner (character: string) {
    winnerPositions.forEach(p => {
        if (
            tictacInputs[p[0]] === character &&
            tictacInputs[p[1]] === character &&
            tictacInputs[p[2]] === character
        ) {
          console.log('Winner is: ' +  character)
        }
    })
  }

  return (
    <Game>
      <GameTitle>Fight!</GameTitle>
      <GameContainer>
        { tictacInputs.map((input, index) =>
            <TicTacSpace
              key={index}
              onClick={() => makePlay(index)}
              source={input} />
          )
        }
      </GameContainer>
    </Game>
  )
}