import { useState } from 'react'
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

import '../../index.css'

export function SelectAvatar () {
  const characters = [
    'baraka',
    'johnny-cage',
    'kitana',
    'liu-kang',
    'mileena',
    'raiden',
    'scorpion',
    'sub-zero'
  ]

  const [players, setPlayers] = useState<String[]>([])

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
        <AvatarFace source={players[0]} />
        <ButtonsContainer>
          <BtnPlay>Play</BtnPlay>
          <BtnReset onClick={resetCharacters}>Reset</BtnReset>
        </ButtonsContainer>
        <AvatarFace source={players[1]} />
      </SelectedCharacter>
    </Avatar>
  )
}

