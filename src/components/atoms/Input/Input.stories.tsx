import { action } from '@storybook/addon-actions';
import React from 'react';
import { Input } from './Input';

export default {
  title: 'atoms/Input'
}

export const Default = () => <Input onChange={action('change')} />;
export const Password = () => <Input type='password' onChange={action('change')} />;
export const DefinedWidth = () => <Input width='400px' onChange={action('change')} />;
