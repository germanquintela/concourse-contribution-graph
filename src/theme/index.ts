import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Theme {
    colors: Colors;
    tokens: Tokens;
  }

  interface ThemeOptions {
    colors: Colors;
    tokens: Tokens;
  }
}

export const theme = createTheme({
  colors: {
    accent: "#4361EE",
    background: "#F4F5F9",
    white: "#FCFCFC",
    sentiment: {
      error: "#FF5D5D",
      success: "#02B260",
      warning: "#FFDD29",
    },
    ocean: {
      900: "#18181B",
      800: "#272933",
      700: "#3F424F",
      600: "#585C6C",
      500: "#6F7384",
      400: "#939CAE",
      300: "#DFE1EE",
      200: "#DFE1EE",
      100: "#EDEFF8",
    },
  },

  tokens: {
    layout: "1280px",
    borderRadius: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "26px",
    },
    font: {
      Title1: "32px",
      Title2: "26px",
      Title3: "23px",
      Title4: "20px",
      TextLG: "18px",
      TextMD: "16px",
      TextSM: "14px",
      TextXS: "12px",
      TextXXS: "10px",
    }
  }
});