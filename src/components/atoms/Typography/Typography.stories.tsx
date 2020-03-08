import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'atoms/Typography'
}

export const Default = () => <Typography>WELCOME</Typography>;
export const Heading = () => <Typography variant='heading'>USER AREA</Typography>;
export const Subheading = () => <Typography variant='subheading'>MY INTERESTS</Typography>;
export const ContentPrimary = () => <Typography variant='content' color='primary'>USERNAME</Typography>;
export const ContentBold = () => <Typography variant='content' weight='bold'>USERNAME</Typography>;
export const ContentLarge = () => <Typography variant='content' size='large'>USERNAME</Typography>;
