import { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    main: '#f7faff',
    dark: '#edf1f7',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light' as PaletteMode,
  primary: {
    main: '#04AB0F',
    light: '#04AB0F',
    dark: '05780C',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#FF9800',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#000000',
    secondary: '#677788',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level2: '#f5f5f5',
    level1: '#ffffff',
  },
};
