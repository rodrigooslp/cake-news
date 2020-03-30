import { action } from '@storybook/addon-actions';
import React from 'react';
import { AppBar } from './AppBar';

export default {
  title: 'organisms/AppBar'
}

export const Default = () => <AppBar handleLogoClick={action('clicked logo')} handleMenuClick={action('clicked menu item')}/>;
export const LoggedIn = () => <AppBar isLoggedIn handleLogoClick={action('clicked logo')} handleMenuClick={action('clicked menu item')}/>;
