import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'components/atoms';

type CardTitleProps = {
  featured?: boolean;
  handleTitleClick: () => void;
};

const StyledTypography = styled(Typography)`
  cursor: pointer;
`;

export const CardTitle: FC<CardTitleProps> = ({ featured, handleTitleClick, children, ...props }) =>
  <StyledTypography size={featured ? 'xlg' : 'lg' } onClick={handleTitleClick} variant='subheading' color={'black'} {...props}>{children}</StyledTypography>;
