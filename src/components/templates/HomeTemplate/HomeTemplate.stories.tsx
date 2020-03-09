import { action } from '@storybook/addon-actions';
import React from 'react';
import { HomeTemplate } from './HomeTemplate';

export default {
  title: 'templates/HomeTemplate'
}

export const Default = () =>
  <HomeTemplate
    handleLogoClick={action('clicked logo')}
    handleMenuClick={action('clicked menu')}
  />;

  export const LoggedIn = () =>
  <HomeTemplate
    isLoggedIn
    handleLogoClick={action('clicked logo')}
    handleMenuClick={action('clicked menu')}
  />;
