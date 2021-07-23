import { AppBar, ButtonBase, Hidden } from '@material-ui/core'
import { FunctionComponent } from 'react'
import { HeaderProps } from './types'
import useStyles from './styles'
import { MdMenu } from 'react-icons/md'
import Logo from '@/assets/daktus_logo.png'

export const Header: FunctionComponent<HeaderProps> = ({
  logoSize,
  rightContent,
  logoContent,
  onHamburguerClick,
}) => {
  const cs = useStyles({ logoSize })
  return (
    <AppBar position="static" color="secondary" classes={{ root: cs.root }}>
      <div className={cs.container}>
        <Hidden mdUp>
          <div className={cs.sideWrapper}>
            <ButtonBase onClick={onHamburguerClick}>
              <MdMenu size={24} />
            </ButtonBase>
          </div>
        </Hidden>
        <div className={cs.sideWrapper}>
          {logoContent || (
            <img src={Logo} alt="Daktus Logo" className={cs.logo} />
          )}
        </div>
        <div className={cs.sideWrapper}>{rightContent}</div>
      </div>
    </AppBar>
  )
}
