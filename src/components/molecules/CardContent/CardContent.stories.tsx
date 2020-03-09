import React from 'react';
import { CardContent } from './CardContent';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/CardContent'
}

const text = 'One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.';

export const Default = () => <CardContent handleCardContentClick={action('clicked')}>{text}</CardContent>;
