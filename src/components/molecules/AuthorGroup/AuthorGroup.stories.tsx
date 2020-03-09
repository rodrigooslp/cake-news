import React from 'react';
import { AuthorGroup } from './AuthorGroup';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/AuthorGroup'
}

const src = 'https://i.pravatar.cc/45?u=placeholder@cakenews.com'

export const Default = () =>
  <AuthorGroup
    srcAvatar={src}
    handleAuthorClick={action('clicked')}>
      by Dwight Schrute
  </AuthorGroup>;


export const Featured = () =>
  <AuthorGroup
    featured
    srcAvatar={src}
    handleAuthorClick={action('clicked')}>
      by Dwight Schrute
  </AuthorGroup>;
