import styled from 'styled-components';
import { ThemeColor } from 'theme';

export type TypographyProps = {
  variant?: 'heading' | 'subheading' | 'content';
  color?: ThemeColor;
  size?: 'small' | 'large' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
  weight?: 'normal' | 'bold';
  onClick?: () => void;
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
  font-size: ${(props) => props.theme.main.fontSizes[props.size ? props.size : 'md']};
  font-weight: ${(props) => props.theme.main.fontWeights.normal};
`;

export const StyledContent = styled.span<TypographyProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'text']};
  font-size: ${(props) => props.theme.main.fontSizes[props.size ? props.size : 'small']};
  font-weight: ${(props) => props.theme.main.fontWeights[props.weight ? props.weight : 'normal']};
`;
