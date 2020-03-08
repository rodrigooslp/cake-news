import 'styled-components';
import * as CSS from 'csstype';

declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      fontFamily: CSS.FontFamilyProperty,
      fontSizes: {
        small: CSS.FontSizeProperty,
        large: CSS.FontSizeProperty
      },
      fontWeights: {
        normal: CSS.FontWeightAbsolute,
        bold: CSS.FontWeightAbsolute
      },
      colors: {
        primary: CSS.ColorProperty,
        highlight: CSS.ColorProperty,
        transparent: CSS.ColorProperty,
        text: CSS.ColorProperty,
        white: CSS.ColorProperty,
        red: CSS.ColorProperty,
        purple: CSS.ColorProperty,
        blue: CSS.ColorProperty,
        green: CSS.ColorProperty,
        yellow: CSS.ColorProperty,
        borders: {
          input: CSS.BorderProperty,
          appBar: CSS.BorderProperty
        }
      }
    };
  }
}
