import { action } from '@storybook/addon-actions';
import React from 'react';
import { MenuHandler } from './MenuHandler';

export default {
  title: 'organisms/MenuHandler'
}

export const Default = () => <MenuHandler handleMenuClick={action('clicked')}/>;
