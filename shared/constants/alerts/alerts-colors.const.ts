import { Platform, StyleSheet } from 'react-native';
import { fontFamilies } from '../fonts.const';

const alertStyles = StyleSheet.create({
    successText: {
      color: '#E8F5E9',
      fontSize: 20,
      fontFamily: Platform.select(fontFamilies.Bold)
    },
    warningText: {
      color: '#FFF8E1',
      fontSize: 20,
      fontFamily: Platform.select(fontFamilies.Bold)
    },
    errorText: {
      color: '#FFEBEE',
      fontSize: 20,
      fontFamily: Platform.select(fontFamilies.Bold)
    },
    infoText: {
      color: '#E3F2FD',
      fontSize: 20,
      fontFamily: Platform.select(fontFamilies.Bold)
    },
    defaultText: {
      color: '#EDEDED',
      fontSize: 20,
      fontFamily: Platform.select(fontFamilies.Bold)
    },
  });
  
  const stylesMap = {
    success: {
      text: alertStyles.successText,
      icon: 'checkmark-circle',
      iconColor: '#4CAF50',
    },
    warning: {
      text: alertStyles.warningText,
      icon: 'warning',
      iconColor: '#FFC107',
    },
    error: {
      text: alertStyles.errorText,
      icon: 'warning',
      iconColor: '#D32F2F',
    },
    info: {
      text: alertStyles.infoText,
      icon: 'information-circle',
      iconColor: '#2196F3',
    },
    default: {
      text: alertStyles.defaultText,
      icon: 'notifications',
      iconColor: '#B8B8D0',
    },
  };
export { alertStyles, stylesMap };