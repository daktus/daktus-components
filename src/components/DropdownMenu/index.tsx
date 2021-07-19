import { Fragment, FunctionComponent } from 'react'
import {
  Avatar,
  Button,
  ListItemText,
  Theme,
  useMediaQuery,
} from '@material-ui/core'
import {
  MdExitToApp,
  MdKeyboardArrowDown,
  MdTrackChanges,
} from 'react-icons/md'
import { DropdownMenuProps } from './types'
import useStyles from './styles'

export const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({
  onLabelClick,
  labelTitle = '',
  labelSubtitle = '',
  avatar = '',
}) => {
  const cs = useStyles()
  const hideTitle = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  )

  return (
    <Fragment>
      <Button
        color="primary"
        variant="text"
        onClick={onLabelClick}
        className={cs.root}
      >
        <div className={cs.menuLabelWrapper}>
          {!hideTitle && (
            <ListItemText primary={labelTitle} secondary={labelSubtitle} />
          )}

          <div className={cs.rightSide}>
            <Avatar
              sizes="sm"
              src={(avatar?.length > 5 && avatar) || undefined}
              className={cs.avatar}
            >
              {avatar && avatar.length <= 2 ? avatar : null}
            </Avatar>
            <MdKeyboardArrowDown color="#999" size={20} />
          </div>
        </div>
      </Button>
      {/* <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '30ch',
            marginTop: '55px',
          },
        }}
      >
        <MenuItem onClick={handleClickChangePlatform}>
          <ListItemIcon>
            <MdTrackChanges />
          </ListItemIcon>
          <Typography>Trocar de plataforma</Typography>
        </MenuItem>
        <MenuItem onClick={handleClickSignOut}>
          <ListItemIcon>
            <MdExitToApp />
          </ListItemIcon>
          <Typography>Sair</Typography>
        </MenuItem>
      </Menu> */}
    </Fragment>
  )
}
