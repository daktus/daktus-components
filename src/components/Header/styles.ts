import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

export interface StyleProps {
  logoSize: number
}

const useStyles = makeStyles<Theme, StyleProps>(theme => ({
  root: {
    minHeight: '64px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 100,
  },

  container: {
    flex: 1,
    width: '100%',
    maxWidth: '1920px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
  },

  sideWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  headerMenuWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  userInfo: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  userFirstLetterCircle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#999',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    marginRight: '10px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '20px',
    },
    '& > p': {
      color: '#FFF',
    },
  },
  letterAndIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: ({ logoSize }) => logoSize ?? 120,
  },
}))

export default useStyles
