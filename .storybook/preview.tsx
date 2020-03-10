import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';

import '../src/index.css'
import { theme } from '../src/theme';

WebFont.load({
  google: {
    families: ['Lato:400,700', 'Open Sans:400,400i']
  }
});

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(story =>
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
