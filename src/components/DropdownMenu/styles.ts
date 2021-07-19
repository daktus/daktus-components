import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    color: '#202020',
    textAlign: 'end',
    textTransform: 'none',
    borderRadius: '10px',
  },

  menuLabelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    fontSize: '.875rem',
  },

  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default useStyles
