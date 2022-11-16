import { createTheme } from "@mui/material/styles";
import { yellow, amber, lime, blue } from 'material-ui-colors';

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFAB00&secondary.color=C6FF00

export const LoginButtonTheme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    superwhite: {
      main: "#FFFFFF",
      contrastText: "#fff",
    },
  },
});


export const AppTheme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    white: {
      main: "#FFFFFF",
      contrastText: "#fff",
    },


    primary: {
      main: blue.A700,
      light: '#768fff',
      dark: '#0039cb',
      contrastText: '#ffffff'
    },

    secondary: {
      main: yellow.A700,
      light: '#ffff52',
      dark: '#c7a500',
      contrastText: '#000000'
    },
    /*   BitVedasThemeDarXXk: {
        main: '#a88100',
        contrastText: '#000000'
      },
      
      BitVedasThemeLighXXt: {
        main: '#ffd651',
        contrastText: '#000000'
      }, */
    /* 
    BitVedasTheme: {
      main: '#E1AD01',
      contrastText: '#fff'
    },
    BitVedasThemeDark: {
      main: '#a88100',
      contrastText: '#000000'
    },
    BitVedasThemeLight: {
      main: '#ffd651',
      contrastText: '#000000'
    }, */
    WhatsAppColor: {
      main: "#59CE72",
      light: '#59CE72',
      dark: '#59CE72',
      contrastText: '#000000'
    },
    GreenDark: {
      main: '#84d305',
      contrastText: '#000000'
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    }
  },
});


