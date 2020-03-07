import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  variant?: 'small' | 'default' | 'link';
  color?: 'red' | 'purple' | 'blue' | 'green' | 'yellow';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const BaseButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  border: 0;
  cursor: pointer;

  &:hover, &:focus {
    outline: 0;
  }
`;

const SmallButton = styled(BaseButton)<ButtonProps>`
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'blue']};
  border: 1px solid ${(props) => props.theme.main.colors[props.color ? props.color : 'blue']};
  background-color: ${(props) => props.theme.main.colors.transparent};
  border-radius: 100px;
  padding: 5px 18px 6px;
  font-size: 14px;

  &:hover, &:focus {
    color: ${(props) => props.theme.main.colors.white};
    background-color: ${(props) => props.theme.main.colors[props.color ? props.color : 'blue']};
  }
`;

const DefaultButton = styled(BaseButton)<ButtonProps>`
  color: ${(props) => props.theme.main.colors.white};
  background-color: ${(props) => props.theme.main.colors.primary};
  font-size: 16px;
  width: 242px;
  height: 52px;

  &:hover, &:focus {
    background-color: ${(props) => props.theme.main.colors.highlight};
  }
`;

const LinkButton = styled(BaseButton)<ButtonProps>`
  color: ${(props) => props.theme.main.colors.primary};
  background-color: ${(props) => props.theme.main.colors.transparent};
  font-size: 16px;
  padding: 0;
`;

export const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
  switch (variant) {
    case 'small': return <SmallButton { ...props }>{ children }</SmallButton>;
    case 'default': return <DefaultButton { ...props }>{ children }</DefaultButton>;
    case 'link': return <LinkButton { ...props }>{ children }</LinkButton>;
    default: return <DefaultButton { ...props }>{ children }</DefaultButton>;
  }
}
