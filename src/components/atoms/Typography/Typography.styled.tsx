import styled from 'styled-components';

export type TypographyProps = {
  variant?: 'heading' | 'subheading' | 'content';
  color?: 'text' | 'primary';
  size?: 'small' | 'large';
  weight?: 'normal' | 'bold';
};

export const StyledHeading = styled.h1<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: ${(props) => props.theme.main.fontSizes.large};
  font-weight: ${(props) => props.theme.main.fontWeights.normal};
`;

export const StyledSubheading = styled.h2<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: ${(props) => props.theme.main.fontSizes.small};
  font-weight: ${(props) => props.theme.main.fontWeights.normal};
`;

export const StyledContent = styled.span<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: ${(props) => props.theme.main.fontSizes[props.size ? props.size : 'small']};
  font-weight: ${(props) => props.theme.main.fontWeights[props.weight ? props.weight : 'normal']};
`;
