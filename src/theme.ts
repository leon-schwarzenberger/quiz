import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#B8B8F3', // Custom blue
      light: '#DCDCF9',
      dark: '#9696ED',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#99EDCC', // Custom pink/red
      light: '#BAF3DC',
      dark: '#74E7B9',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: `'Segoe UI', sans-serif`,
    fontWeightRegular: 600,
  },
  components: {
    // You can customize component styles here
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase transformation
        },
      },
    },
  },
});
