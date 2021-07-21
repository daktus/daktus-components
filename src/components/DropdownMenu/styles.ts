import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme, { hideTitle: boolean }>({
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

  avatar: ({ hideTitle }) => ({
    fontSize: '.875rem',
    marginRight: 10,
    marginLeft: hideTitle ? 0 : 20,
  }),

  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default useStyles
