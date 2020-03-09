import { action } from '@storybook/addon-actions';
import React from 'react';
import { Logo } from './Logo';

export default {
  title: 'atoms/Logo'
}

export const Default = () => <Logo handleLogoClick={action('clicked')}/>;
