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
  <StyledTypography
    variant='subheading'
    color={'black'}
    onClick={handleTitleClick}
    size={featured ? 'xlg' : 'lg' }
    {...props}>
      {children}
  </StyledTypography>;
