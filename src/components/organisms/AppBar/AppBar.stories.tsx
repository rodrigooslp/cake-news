import { action } from '@storybook/addon-actions';
import React from 'react';
import { AppBar } from './AppBar';

export default {
  title: 'organisms/AppBar'
}

export const Default = () => <AppBar handleMenuClick={action('clicked')}/>;
