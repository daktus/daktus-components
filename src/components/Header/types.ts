import { MouseEventHandler, ReactNode } from 'react'

export interface HeaderProps {
  logoSize?: number
  rightContent?: ReactNode
  logoContent?: ReactNode
  onHamburguerClick?: MouseEventHandler<HTMLButtonElement>
}
