import { MouseEventHandler } from 'react'

export interface DropdownMenuProps {
  onLabelClick?: MouseEventHandler<HTMLButtonElement>
  labelTitle?: string
  labelSubtitle?: string
  avatar?: string
}
