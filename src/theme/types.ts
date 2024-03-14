interface OceanPalette {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
}

interface Colors {
  accent: string;
  ocean: OceanPalette;
  background: string;
  white: string;
  sentiment: {
    error: string;
    success: string;
    warning: string;
  }
}

interface Font {
  Title1: string;
  Title2: string;
  Title3: string;
  Title4: string;
  TextLG: string;
  TextMD: string;
  TextSM: string;
  TextXS: string;
  TextXXS: string;
}

interface BorderRadius {
  xs: string,
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface Tokens {
  layout: string;
  font: Font;
  borderRadius: BorderRadius;
}