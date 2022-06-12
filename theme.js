import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#009900',
    },
    secondary: {
      main: '#33CC00',
    },
    error: {
      main: '#FF0000',
    },
  },
});

export default theme;