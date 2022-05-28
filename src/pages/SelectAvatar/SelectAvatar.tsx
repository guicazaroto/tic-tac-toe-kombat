import { useNavigate } from 'react-router-dom'
import { useCharacters } from '../../hooks/useCharacters'
import {
  Avatar,
  AvatarContainer,
  AvatarTitle,
  SelectedCharacter,
  ButtonsContainer,
  BtnPlay,
  BtnReset
} from './SelectAvatar.styles'
import { AvatarFace } from '../../components/AvatarFace'

export function SelectAvatar () {
  const navigate = useNavigate()
  const {characters, players, setPlayers} = useCharacters()
  const hasTwoPlayersSelected = players.length === 2

  function selectCharacter (character: string) {
    if (players.length === 2) return

    setPlayers(characters => [...characters, character])
  }

  function playGame () {
    navigate('/play', { state: { players } })
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
            <AvatarFace selectCharacter={() => selectCharacter(character)} source={character} key={character} />
          ))
        }
      </AvatarContainer>
      <SelectedCharacter>
        <div>
          <AvatarFace source={players[0]} />
        </div>
        <ButtonsContainer>
          <BtnPlay onClick={playGame} disabled={!hasTwoPlayersSelected}>Play</BtnPlay>
          <BtnReset onClick={resetCharacters}>Reset</BtnReset>
        </ButtonsContainer>
        <div>
          <AvatarFace source={players[1]} />
        </div>      
      </SelectedCharacter>
    </Avatar>
  )
}

