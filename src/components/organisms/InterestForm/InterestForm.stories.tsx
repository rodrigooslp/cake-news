import { action } from '@storybook/addon-actions';
import React from 'react';
import { InterestForm } from './InterestForm';

export default {
  title: 'organisms/InterestForm'
}

export const Default = () => <InterestForm handleSave={action('submitted')} handleBack={action('back')}/>;
