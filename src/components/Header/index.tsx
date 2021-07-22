import { FunctionComponent } from 'react'
import { HeaderProps } from './types'

export const Header: FunctionComponent<HeaderProps> = ({ hello }) => {
  return <h1>{hello || 'hello'}</h1>
}
