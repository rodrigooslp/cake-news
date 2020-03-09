import { DefaultTheme } from 'styled-components'

export type ThemeColor = 'red' | 'purple' | 'blue' | 'green' | 'yellow' | 'text' | 'primary' | 'black' | 'white' | 'lightGray' | 'gray';

export const theme: DefaultTheme = {
  awesomegrid: {
    columns: {
      xs: 12,
      sm: 12,
      md: 12
    },
    gutterWidth: {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 2,
      xl: 2
    }
  },
  main: {
    fontFamily: 'Lato',
    fontFamilyAlt: 'Open Sans',
    fontSizes: {
      small: '14px', // deprecated
      large: '24px', // deprecated
      xxs: '10px',
      xs: '13px',
      sm: '14px',
      md: '17px',
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
      black: '#000',
      red: '#D0021B',
      purple: '#BD10E0',
      blue: '#4A90E2',
      green: '#7CBB37',
      yellow: '#F5A623',
      lightGray: '#808080',
      gray: '#686868',
      borders: {
        input: '#BFBFBF',
        appBar: '#979797'
      },
      overlay: '#04000021'
    }
  }
}
