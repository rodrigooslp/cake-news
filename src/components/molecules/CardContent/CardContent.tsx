import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'components/atoms';

type CardContentProps = {
  handleCardContentClick: () => void;
};

const StyledTypography = styled(Typography)`
  font-family: ${(props) => props.theme.main.fontFamilyAlt};
  cursor: pointer;
`;

export const CardContent: FC<CardContentProps> = ({ handleCardContentClick, children, ...props }) =>
  <StyledTypography
    size={'sm'}
    color={'gray'}
    onClick={handleCardContentClick}
    {...props}>
      {children}
  </StyledTypography>;
