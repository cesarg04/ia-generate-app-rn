// theme.js
import { Platform } from 'react-native';
import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  fontFamily: 'NotoSans'
};

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6B5DB0',
    accent: '#F0A500',
    background: '#251F48',
    surface: '#312B5C',
    text: '#EDEDED',
    onSurface: '#B8B8D0',
    error: '#D32F2F',
    disabled: '#a3a3a3',
    placeholder: '#c4c4c4',
    backdrop: '#00000050',
    notification: '#f50057',
    inputs: '#514983'
  },
  // fonts: configureFonts({ config: fontConfig }),
};

export default theme;
