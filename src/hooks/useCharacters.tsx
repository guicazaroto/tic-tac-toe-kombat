import { useState } from 'react'

export function useCharacters () {
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

  return { characters, players, setPlayers }
}