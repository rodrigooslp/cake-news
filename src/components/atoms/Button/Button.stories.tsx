import { action } from '@storybook/addon-actions';
import React from 'react';
import { Button } from './Button';

export default {
  title: 'atoms/Button'
}

export const Default = () => <Button onClick={action('clicked')}>SAVE</Button>;
export const Link = () => <Button variant="link" onClick={action('clicked')}>BACK TO HOME</Button>;
export const SmallDefault = () => <Button variant="small" onClick={action('clicked')}>HOME</Button>;

export const SmallRed = () =>
  <Button
    variant="small"
    color="red"
    onClick={action('clicked')}>
      POLITICS
  </Button>;

export const ActiveSmallRed = () =>
  <Button
    active
    variant="small"
    color="red"
    onClick={action('clicked')}>
      POLITICS
  </Button>;

export const SmallPurple = () =>
  <Button
    variant="small"
    color="purple"
    onClick={action('clicked')}>
      BUSINESS
  </Button>;

export const ActiveSmallPurple = () =>
  <Button
    active
    variant="small"
    color="purple"
    onClick={action('clicked')}>
      BUSINESS
  </Button>;

export const SmallBlue = () =>
  <Button
    variant="small"
    color="blue"
    onClick={action('clicked')}>
      TECH
  </Button>;

export const ActiveSmallBlue = () =>
  <Button
    active
    variant="small"
    color="blue"
    onClick={action('clicked')}>
      TECH
  </Button>;

export const SmallGreen = () =>
  <Button
    variant="small"
    color="green"
    onClick={action('clicked')}>
      SCIENCE
  </Button>;

export const ActiveSmallGreen = () =>
  <Button
    active
    variant="small"
    color="green"
    onClick={action('clicked')}>
      SCIENCE
  </Button>;

export const SmallYellow = () =>
  <Button
    variant="small"
    color="yellow"
    onClick={action('clicked')}>
      SPORTS
  </Button>;

export const ActiveSmallYellow = () =>
  <Button
    active
    variant="small"
    color="yellow"
    onClick={action('clicked')}>
      SPORTS
  </Button>;

