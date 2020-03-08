import { action } from '@storybook/addon-actions';
import React from 'react';
import { Hamburger } from './Hamburger';

export default {
  title: 'atoms/Hamburger'
}

export const Default = () => <Hamburger onClick={action('clicked')}/>;
