import React from 'react';
import { Avatar } from './Avatar';

export default {
  title: 'atoms/Avatar'
}

const src = 'https://i.pravatar.cc/45?u=placeholder@cakenews.com'

export const Default = () => <Avatar src={src} />;
export const Featured = () => <Avatar featured src={src} />;
