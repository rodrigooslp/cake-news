import React, { FC } from 'react';
import styled from 'styled-components';

type TypographyProps = {
  variant?: 'heading' | 'subheading' | 'content';
  color?: 'text' | 'primary';
  size?: 'small' | 'large';
  weight?: 'normal' | 'bold';
};

const StyledHeading = styled.h1<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: ${(props) => props.theme.main.fontSizes.large};
  font-weight: ${(props) => props.theme.main.fontWeights.normal};
`;

const StyledSubheading = styled.h2<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: ${(props) => props.theme.main.fontSizes.small};
  font-weight: ${(props) => props.theme.main.fontWeights.normal};
`;

const StyledContent = styled.span<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: ${(props) => props.theme.main.fontSizes[props.size ? props.size : 'small']};
  font-weight: ${(props) => props.theme.main.fontWeights[props.weight ? props.weight : 'normal']};
`;

export const Typography: FC<TypographyProps> = ({ children, variant, ...props }) => {
  switch (variant) {
    case 'heading': return <StyledHeading { ...props }>{ children }</StyledHeading>;
    case 'subheading': return <StyledSubheading { ...props }>{ children }</StyledSubheading>;
    case 'content': return <StyledContent { ...props }>{ children }</StyledContent>;
    default: return <StyledContent { ...props }>{ children }</StyledContent>;
  }
}
