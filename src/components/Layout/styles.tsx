import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')(({ theme }) => ({
  position: "relative",

  width: "100vw",

  backgroundColor: theme.colors.background,
}));

export const InnerWrapper = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  paddingLeft: 16,
  paddingRight: 16,
  maxWidth: theme.tokens.layout,
  margin: "auto",

  [theme.breakpoints.up("md")]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));