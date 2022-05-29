import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AvatarFace } from "../../components/AvatarFace"
import { WinnerModal as Modal } from '../../components/WinnerModal'
import {
  Game,
  GameContainer,
  TicTacSpace,
  PlayersContainer,
  GameTitle,
  GameScore
} from './GamePlay.styles'

type LocationProps = {
  state: {
    players: [string, string];
  };
};


export function GamePlay () {
  const winnerPositions = [
    [3,4,5],
    [0,1,2],
    [1,4,7],
    [6,7,8],
    [0,3,6],
    [2,4,6],
    [2,5,8],
    [0,4,8]
  ]

  const { state } = useLocation() as unknown as LocationProps;
  const { players } = state
  
  const [tictacInputs, setTictacInputs] = useState(Array.from({length: 9}, () => ''))
  const [currentPlayer, setCurrentPlayer] = useState(0)
  
  const [winner, setWinner] = useState<string | null>(null)
  const [wins, setWins] = useState({
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

          setWins({
            ...wins,
            [character]: wins[character] + 1
          })

          setWinner(character)
        }
    })

    checkIfHasTiedGame()
  }

  function checkIfHasTiedGame () {
    if (winner) return

    if (tictacInputs.every(position => position)) {
        setWinner('Tied')
    }
  }

  function playAgain () {
    setWinner(null)
    setTictacInputs(Array.from({length: 9}, () => ''))
  }

  return (
    <>
     { winner && (
        <Modal
          winner={winner}
          isOpen={!!winner}
          onPress={playAgain}
        />
      )
     }
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
        <PlayersContainer>
          <AvatarFace source={players[0]} />
          <GameScore>
            {wins[players[0]]} x  {wins[players[1]]}
          </GameScore>
          <AvatarFace source={players[1]} />
        </PlayersContainer>
      </Game>
    </>
  )
}