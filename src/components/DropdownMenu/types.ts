import { MouseEventHandler, ReactNode } from 'react'
import { IconType } from 'react-icons/lib'

export interface IMenuItem {
  label: string
  icon?: ReactNode | IconType
  onClick?: MouseEventHandler<HTMLLIElement>
}
export interface DropdownMenuProps {
  onLabelClick?: MouseEventHandler<HTMLButtonElement>
  onClose?(): void
  labelTitle?: string
  labelSubtitle?: string
  avatar?: string
  open?: boolean
  menuItems?: IMenuItem[]
}
