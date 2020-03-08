import React, { FC } from 'react';
import { Typography } from 'components/atoms';

type WelcomeProps = {
  username: string;
};

export const Welcome: FC<WelcomeProps> = ({ username, ...props }) =>
  <Typography variant='heading' { ...props }>
    <Typography size='large'>WELCOME, </Typography>
    <Typography size='large' color='primary'>{username.toUpperCase()}</Typography>
  </Typography>;
