import { action } from '@storybook/addon-actions';
import React from 'react';
import { FormGroup } from './FormGroup';

export default {
  title: 'molecules/FormGroup'
}

export const Default = () => <FormGroup id='username' label='USERNAME' handleChange={action('change')} />;
export const Password = () => <FormGroup id='password' label='PASSWORD' type='password' handleChange={action('change')} />;
export const FullWidth = () => <FormGroup id='name' label='NAME' width='100%' handleChange={action('change')} />;
