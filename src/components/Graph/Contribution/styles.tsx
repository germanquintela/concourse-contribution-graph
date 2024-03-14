import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')<{ opacity: number }>(({ theme, opacity }) => ({
  width: 12,
  height: 12,

  backgroundColor: theme.colors.accent,
  borderRadius: theme.tokens.borderRadius.xs,
  opacity: opacity,
}));