import { BtnPlay, BtnReset } from "../Button"
import { ModalBackdrop, ModalBody, ModalTitle } from './WinnerModal.styles'

interface ModalTypes {
  winner?: string
  isOpen?: boolean
  onPress?: () => void
}

export function Modal ({ isOpen = false, winner, onPress }: ModalTypes) {

  function restartGame () {
    window.location.href = '/'
  }

  return isOpen ? (
    <ModalBackdrop>
      <ModalBody>
        {
          winner === 'Tied' ? <h1>Gave a</h1> : <h1>Winner is</h1>
        }
        <ModalTitle>{ winner }</ModalTitle>
        <img src="/logo.png" alt="logo"/>
        <BtnPlay press={onPress}>Play again</BtnPlay>
        <BtnReset press={restartGame}>Restart</BtnReset>
      </ModalBody>
    </ModalBackdrop>
  ) : null
}