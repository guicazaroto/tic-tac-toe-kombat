import { ReactNode } from "react";
import { BtnPlayStyles, BtnResetStyles } from './Button.styles'

interface BtnProps {
  children: ReactNode
  press?: () => void
  isDisabled?: boolean
}

export function BtnPlay ({ children, press, isDisabled = false }: BtnProps){
 return (
    <BtnPlayStyles onClick={press} disabled={isDisabled}>
      {children}
    </BtnPlayStyles>
 )
}

export function BtnReset ({ children, press, isDisabled = false }: BtnProps) {
  return (
    <BtnResetStyles onClick={press} disabled={isDisabled}>
      {children}
    </BtnResetStyles>
  )
}