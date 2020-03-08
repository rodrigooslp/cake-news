import { action } from '@storybook/addon-actions';
import React from 'react';
import { Menu } from './Menu';

export default {
  title: 'molecules/Menu'
}

export const Default = () => <Menu handleMenuClick={action('clicked')}/>;
