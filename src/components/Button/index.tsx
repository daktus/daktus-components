import { FunctionComponent, useMemo } from 'react'
import { ButtonProps } from './types'

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  return <button>{children}</button>
}
