import { AvatarFaceStyles, AvatarFaceContainer } from './AvatarFace.styles'

interface AvatarFaceProps {
  source?: String
  selectCharacter?: () => void
}

export function AvatarFace ({ source, selectCharacter }: AvatarFaceProps) {
  return (
    <AvatarFaceContainer>
      <AvatarFaceStyles source={source} onClick={selectCharacter} />
      { source }
    </ AvatarFaceContainer>
  )
}