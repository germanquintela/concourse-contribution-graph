import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  minHeight: "100vh",
}));

export const Title = styled('h1')(({ theme }) => ({
  marginBottom: 4,

  color: theme.colors.ocean[800],
  fontSize: theme.tokens.font.Title1,
  fontWeight: 700,
}));

export const Subtitle = styled('h1')(({ theme }) => ({
  marginBottom: 32,

  color: theme.colors.ocean[700],
  fontSize: theme.tokens.font.TextMD,
  fontWeight: 400,
}));

export const Link = styled('a')(({ theme }) => ({
  color: theme.colors.accent,
}));

export const EmptyPlaceholderWrapper = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: 800,
  height: 158,

  overflow: "hidden",
  backgroundColor: theme.colors.ocean[100],
  borderRadius: theme.tokens.borderRadius.lg,
}));

export const ErrorText = styled('p')(({ theme }) => ({
  color: theme.colors.sentiment.error,
  fontSize: theme.tokens.font.TextMD,
}));