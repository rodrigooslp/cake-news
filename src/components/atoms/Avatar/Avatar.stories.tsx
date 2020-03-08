import React from 'react';
import { Avatar } from './Avatar';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/Avatar'
}

const src = 'https://i.pravatar.cc/45?u=placeholder@cakenews.com'

export const Default = () => <Avatar handleAvatarClick={action('clicked')} src={src} />;
export const Featured = () => <Avatar handleAvatarClick={action('clicked')} featured src={src} />;
