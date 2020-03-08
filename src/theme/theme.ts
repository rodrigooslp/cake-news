import { DefaultTheme } from 'styled-components'

export type ThemeColor = 'red' | 'purple' | 'blue' | 'green' | 'yellow' | 'text' | 'primary';

export const theme: DefaultTheme = {
  main: {
    fontFamily: 'Lato',
    fontSizes: {
      small: '14px', // deprecated
      large: '24px', // deprecated
      xxs: '10px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '24px',
      xlg: '29px'
    },
    fontWeights: {
      normal: 400,
      bold: 700
    },
    colors: {
      primary: '#4990E2',
      highlight: '#5E9BE2',
      transparent: '#00000000',
      text: '#3E433E',
      white: '#fff',
      red: '#D0021B',
      purple: '#BD10E0',
      blue: '#4A90E2',
      green: '#7CBB37',
      yellow: '#F5A623',
      borders: {
        input: '#BFBFBF',
        appBar: '#979797'
      }
    }
  }
}
