import React from 'react';
import { Input } from './Input';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input'
}

export const Default = () => <Input onChange={action('change')} />;
export const WithWidth = () => <Input width='400px' onChange={action('change')} />;
