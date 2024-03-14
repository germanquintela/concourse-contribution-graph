import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));

export const TableWrapper = styled('div')(({ theme }) => ({
  width: "fit-content",
  maxWidth: "90vw",
  padding: 16,

  overflowX: "scroll",
  backgroundColor: theme.colors.white,
  borderRadius: theme.tokens.borderRadius.lg,

  [theme.breakpoints.up("md")]: {
    minWidth: 800,
  },
}));

export const ReferenceWrapper = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  gap: 4,
  marginTop: 8,
}));

export const ReferenceText = styled('p')(({ theme }) => ({
  color: theme.colors.ocean[500],
  fontSize: theme.tokens.font.TextXS,
}));