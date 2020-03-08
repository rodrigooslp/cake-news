import React from 'react';
import { CardTitle } from './CardTitle';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/CardTitle'
}

export const Default = () => <CardTitle handleTitleClick={action('clicked')}>NASA Formalizes Efforts To Protect Earth From Asteroids</CardTitle>;
export const Featured = () => <CardTitle featured handleTitleClick={action('clicked')}>NASA Formalizes Efforts To Protect Earth From Asteroids</CardTitle>;
