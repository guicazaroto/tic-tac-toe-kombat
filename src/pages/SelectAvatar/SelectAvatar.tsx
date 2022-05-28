import { useNavigate } from 'react-router-dom'
import { useCharacters } from '../../hooks/useCharacters'
import {
  Avatar,
  AvatarContainer,
  AvatarFace,
  AvatarTitle,
  SelectedCharacter,
  ButtonsContainer,
  BtnPlay,
  BtnReset
} from './SelectAvatar.styles'

export function SelectAvatar () {
  const navigate = useNavigate()
  const {characters, players, setPlayers} = useCharacters()
  const hasTwoPlayersSelected = players.length === 2

  function selectCharacter (character: string) {
    if (players.length === 2) return

    setPlayers(characters => [...characters, character])
  }

  function playGame () {
    navigate('/play')
  }

  function resetCharacters () {
    setPlayers([])
  }

  return (
    <Avatar>
      <AvatarTitle />
      <AvatarContainer>
        {
          characters.map(character => (
            <AvatarFace onClick={() => selectCharacter(character)} source={character} key={character} />
          ))
        }
      </AvatarContainer>
      <SelectedCharacter>
        <div>
          <AvatarFace source={players[0]} />
          {players[0] && <p>{ players[0] }</p>}
        </div>
        <ButtonsContainer>
          <BtnPlay onClick={playGame} disabled={!hasTwoPlayersSelected}>Play</BtnPlay>
          <BtnReset onClick={resetCharacters}>Reset</BtnReset>
        </ButtonsContainer>
        <div>
          <AvatarFace source={players[1]} />
          {players[1] && <p>{ players[1] }</p>}
        </div>      
      </SelectedCharacter>
    </Avatar>
  )
}

