import { action } from '@storybook/addon-actions';
import React from 'react';
import { InterestPicker } from './InterestPicker';

export default {
  title: 'molecules/InterestPicker'
}


export const Default = () =>
  <InterestPicker
    selectedInterests={['politics', 'science']}
    handleAddInterest={action('add interest')}
    handleRemoveInterest={action('remove interest')} />;
