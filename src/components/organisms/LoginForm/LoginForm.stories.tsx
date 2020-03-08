import { action } from '@storybook/addon-actions';
import React from 'react';
import { LoginForm } from './LoginForm';

export default {
  title: 'organisms/LoginForm'
}

export const Default = () => <LoginForm handleLogin={action('submitted')}/>;
