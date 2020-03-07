import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';

import { theme } from '../src/theme';

WebFont.load({
  google: {
    families: ['Lato:400', 'Open Sans:400,400i']
  }
});

addDecorator(story =>
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
