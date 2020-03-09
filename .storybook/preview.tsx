import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';

import '../src/index.css'
import { theme, awesomegrid } from '../src/theme';

WebFont.load({
  google: {
    families: ['Lato:400,700', 'Open Sans:400,400i']
  }
});

addDecorator(story =>
  <ThemeProvider theme={{...theme, awesomegrid}}>{story()}</ThemeProvider>
);
