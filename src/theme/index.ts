import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DC0737',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  overrides: {
    MuiContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
})

export default theme
