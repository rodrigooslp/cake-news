import { action } from '@storybook/addon-actions';
import React from 'react';
import { InterestActions } from './InterestActions';

export default {
  title: 'molecules/InterestActions'
}

export const Default = () => <InterestActions handleBack={action('clicked back')}/>;
