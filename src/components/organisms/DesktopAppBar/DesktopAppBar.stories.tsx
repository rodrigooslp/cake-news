import { action } from '@storybook/addon-actions';
import React from 'react';
import { DesktopAppBar } from './DesktopAppBar';

export default {
  title: 'organisms/DesktopAppBar'
}

export const Default = () => <DesktopAppBar handleLogoClick={action('clicked logo')} handleMenuClick={action('clicked')}/>;
export const LoggedIn = () => <DesktopAppBar handleLogoClick={action('clicked logo')} isLoggedIn handleMenuClick={action('clicked')}/>;
