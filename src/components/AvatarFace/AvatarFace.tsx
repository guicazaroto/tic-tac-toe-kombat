import { AvatarFaceStyles, AvatarFaceContainer } from './AvatarFace.styles'

interface AvatarFaceProps {
  hoverColor?: String
  source?: String
  selectCharacter?: () => void
}

export function AvatarFace ({ source, selectCharacter, hoverColor = '' }: AvatarFaceProps) {
  return (
    <AvatarFaceContainer>
      <AvatarFaceStyles
        source={source}
        hoverColor={hoverColor}
        onClick={selectCharacter}
      />
      { source }
    </ AvatarFaceContainer>
  )
}