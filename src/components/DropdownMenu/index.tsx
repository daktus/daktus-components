import {
  FunctionComponent,
  MouseEventHandler,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from 'react'
import { createChainedFunction } from '@/utils/createChainedFunction'
import {
  Avatar,
  Button,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
  Theme,
  Typography,
  useMediaQuery,
  useControlled,
} from '@material-ui/core'

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { DropdownMenuProps } from './types'
import useStyles from './styles'

export const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({
  onLabelClick,
  labelTitle = '',
  labelSubtitle = '',
  avatar = '',
  open: openProp,
  onClose,
  menuItems,
}) => {
  const [open, setOpen] = useControlled({
    controlled: openProp,
    default: false,
    name: 'DropdonMenu',
    state: 'open',
  })
  const anchorEl = useRef(null)
  const hideTitle = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs'),
  )
  const cs = useStyles({ hideTitle })
  const handleLabelClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    event => {
      setOpen(true)
      onLabelClick && onLabelClick(event)
    },
    [onLabelClick, setOpen],
  )

  const handleClose = useMemo(
    () => createChainedFunction(() => setOpen(false), onClose),
    [onClose, setOpen],
  )

  return (
    <div>
      <Button
        color="primary"
        variant="text"
        onClick={handleLabelClick}
        className={cs.root}
        ref={anchorEl}
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
      {menuItems && (
        <Menu
          id="long-menu"
          anchorEl={() => anchorEl.current}
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
          {menuItems.map((menuItem, index) => {
            const { label, icon: Icon, onClick } = menuItem
            console.log(typeof Icon === 'function')
            return (
              <MenuItem key={index} onClick={onClick}>
                <ListItemIcon>
                  {Icon ? (
                    typeof Icon === 'function' ? (
                      <Icon key={'icon' + index} />
                    ) : (
                      Icon
                    )
                  ) : (
                    <MdKeyboardArrowRight />
                  )}
                </ListItemIcon>
                <Typography>{label}</Typography>
              </MenuItem>
            )
          })}
        </Menu>
      )}
    </div>
  )
}
