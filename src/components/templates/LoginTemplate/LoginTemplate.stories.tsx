import { action } from '@storybook/addon-actions';
import React from 'react';
import { LoginTemplate } from './LoginTemplate';

export default {
  title: 'templates/LoginTemplate'
}

export const Default = () =>
  <LoginTemplate
    isLoggedIn={false}
    handleLogoClick={action('clicked logo')}
    handleMenuClick={action('clicked menu')}
    handleLogin={action('submitted')} />;

