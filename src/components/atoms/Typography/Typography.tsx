import React, { FC } from 'react';
import styled from 'styled-components';

type TypographyProps = {
  variant?: 'heading' | 'subheading' | 'content';
  color?: 'text' | 'primary';
};

const StyledHeading = styled.h1<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: 24px;
  font-weight: 400;
`;

const StyledSubheading = styled.h2<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: 14px;
  font-weight: 400;
`;

const StyledContent = styled.span<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
`;

export const Typography: FC<TypographyProps> = ({ children, variant, ...props }) => {
  switch (variant) {
    case 'heading': return <StyledHeading { ...props }>{ children }</StyledHeading>;
    case 'subheading': return <StyledSubheading { ...props }>{ children }</StyledSubheading>;
    case 'content': return <StyledContent { ...props }>{ children }</StyledContent>;
    default: return <StyledContent { ...props }>{ children }</StyledContent>;
  }
}
