import 'styled-components';
import * as CSS from 'csstype';

declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      fontFamily: CSS.FontFamilyProperty
      colors: {
        text: CSS.ColorProperty
      }
    },
  }
}
