import { useState } from 'react'
import { Avatar, AvatarContainer, AvatarFace, AvatarTitle } from './SelectAvatar.styles'

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

  return (
    <Avatar>
      <AvatarTitle />
      <h2>Choose your fighter</h2>
      <AvatarContainer>
        {
          characters.map(character => (
            <AvatarFace onClick={() => selectCharacter(character)} source={character} key={character} />
          ))
        }
      </AvatarContainer>  
    </Avatar>
  )
}

