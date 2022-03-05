import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#fff',
    textSecondary: '#949D9D',
    textAppBar: '#fff',
    primary: '#6e02c9',
    bgPrimary: '#161925',
    bgSecondary: '#181c28',
    bgAppBar: '#0c0e14',
    separator: '#e1e5e8',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
