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
  const {characters, players, setPlayers} = useCharacters()

  function selectCharacter (character: string) {
    if (players.length === 2) return

    setPlayers(characters => [...characters, character])
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
          <BtnPlay>Play</BtnPlay>
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

