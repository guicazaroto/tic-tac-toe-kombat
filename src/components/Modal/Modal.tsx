import styled from "styled-components"
import { BtnPlay } from "../Button"
import { ModalBackdrop, ModalBody, ModalTitle } from './Modal.styles'

interface ModalTypes {
  winner: string
  isOpen: boolean
  onPress: () => void
}

export function Modal ({ isOpen, winner, onPress }: ModalTypes) {
  return (
    <ModalBackdrop>
      <ModalBody>
        <h1>Winner is</h1>
        <ModalTitle>{ winner }</ModalTitle>
        <img src="/logo.png" alt="logo"/>
        <BtnPlay press={onPress}>Play again</BtnPlay>
      </ModalBody>
    </ModalBackdrop>
  )
}