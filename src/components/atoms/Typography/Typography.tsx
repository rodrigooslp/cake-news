import React, { FC } from 'react';
import styled, { css } from 'styled-components';

type TypographyProps = {
  variant?: 'heading' | 'subheading';
};

const baseTypography = css`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors.text};
`;

const StyledHeading = styled.h1`
  ${baseTypography}
  font-size: 24px;
`;

const StyledSubheading = styled.h2`
  ${baseTypography}
  font-size: 14px;
`;

export const Typography: FC<TypographyProps> = ({ children, variant, ...props }) => {
  switch (variant) {
    case 'heading': return <StyledHeading { ...props }>{ children }</StyledHeading>;
    case 'subheading': return <StyledSubheading { ...props }>{ children }</StyledSubheading>;
    default: return <StyledHeading { ...props }>{ children }</StyledHeading>;
  }
}
