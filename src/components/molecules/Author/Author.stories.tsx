import React from 'react';
import { Author } from './Author';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/Author'
}

export const Default = () => <Author handleAuthorClick={action('clicked')}>by Dwight Schrute</Author>;
