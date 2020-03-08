import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'components/atoms';

type AuthorProps = {
  featured?: boolean;
  handleAuthorClick: () => void;
};

const StyledTypography = styled(Typography)`
  font-family: ${(props) => props.theme.main.fontFamilyAlt};
  font-style: italic;
  cursor: pointer;
`;

export const Author: FC<AuthorProps> = ({ handleAuthorClick, children, ...props }) =>
  <StyledTypography size={'xs'} onClick={handleAuthorClick} color={'lightGray'} {...props}>{children}</StyledTypography>;
