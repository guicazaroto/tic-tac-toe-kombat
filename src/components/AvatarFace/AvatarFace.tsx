import { AvatarFaceStyles } from './AvatarFace.styles'

interface AvatarFaceProps {
  source?: String
  selectCharacter?: () => void
}

export function AvatarFace ({ source, selectCharacter }: AvatarFaceProps) {
  return <AvatarFaceStyles source={source} onClick={selectCharacter} />
}