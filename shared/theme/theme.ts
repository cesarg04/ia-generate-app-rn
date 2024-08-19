// theme.js
import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#333333',
    error: '#f13a59',
    onSurface: '#000000',
    disabled: '#a3a3a3',
    placeholder: '#c4c4c4',
    backdrop: '#00000050',
    notification: '#f50057',
  },
//   fonts: configureFonts({ config: fontConfig, isV3: false }),
};

export default theme;