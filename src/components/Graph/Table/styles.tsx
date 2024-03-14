import { styled } from '@mui/material/styles';

export const Wrapper = styled('table')(() => ({
  borderSpacing: 3
}));

export const Row = styled('tr')(() => ({
  height: 12
}));

export const MonthHead = styled('th')(() => ({
  position: "relative",

  height: 14,
  minWidth: 21,

  marginRight: 2
}));

export const DaysHead = styled('th')(() => ({
  position: "relative",

  height: 12,
  minWidth: 28,

  marginRight: 2
}));

export const MonthTitle = styled('p')(({ theme }) => ({
  position: "absolute",

  top: -2,

  fontSize: theme.tokens.font.TextXS,
  fontWeight: 500,
  textAlign: "left",
  color: theme.colors.ocean[400]
}));

export const DaysTitle = styled('p')(({ theme }) => ({
  position: "absolute",

  top: -2,
  left: 0,

  fontSize: theme.tokens.font.TextXS,
  fontWeight: 500,
  textAlign: "right",
  color: theme.colors.ocean[400]
}));
