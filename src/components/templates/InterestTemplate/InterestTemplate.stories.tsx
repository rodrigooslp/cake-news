import { action } from '@storybook/addon-actions';
import React from 'react';
import { InterestTemplate } from './InterestTemplate';

export default {
  title: 'templates/InterestTemplate'
}

export const Default = () =>
  <InterestTemplate
    username='cheesecake-labs'
    handleMenuClick={action('clicked')}
    handleSave={action('submitted')}
    handleBack={action('back')} />;
