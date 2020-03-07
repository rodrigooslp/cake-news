import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Typography'
}

export const Default = () => <Typography>WELCOME</Typography>;
export const DefaultPrimary = () => <Typography color='primary'>WELCOME</Typography>;
export const Heading = () => <Typography variant='heading'>USER AREA</Typography>;
export const Subheading = () => <Typography variant='subheading'>MY INTERESTS</Typography>;
