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
    primary: '#3498db',
    accent: '#f1c40f',
    background: '#251F48',
    surface: '#ffffff',
    text: '#333333',
    error: '#f13a59',
    onSurface: '#000000',
    disabled: '#a3a3a3',
    placeholder: '#c4c4c4',
    backdrop: '#00000050',
    notification: '#f50057',
    inputs: '#514983'
  },
  // fonts: configureFonts({ config: fontConfig }),
};

export default theme;
