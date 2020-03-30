import React from 'react';
import { CardTag } from './CardTag';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/CardTag'
}

export const Politics = () => <CardTag handleTagClick={action('clicked')} type='politics'/>;
export const Business = () => <CardTag handleTagClick={action('clicked')} type='business'/>;
export const Tech = () => <CardTag handleTagClick={action('clicked')} type='tech'/>;
export const Science = () => <CardTag handleTagClick={action('clicked')} type='science'/>;
export const Sports = () => <CardTag handleTagClick={action('clicked')} type='sports'/>;
