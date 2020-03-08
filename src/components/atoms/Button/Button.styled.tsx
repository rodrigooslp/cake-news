import styled from 'styled-components';

export type ButtonProps = {
  active?: boolean;
  variant?: 'small' | 'default' | 'link';
  color?: 'red' | 'purple' | 'blue' | 'green' | 'yellow' | 'text' | 'primary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
};

const BaseButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.main.fontFamily};
  border: 0;
  cursor: pointer;

  &:hover, &:focus {
    outline: 0;
  }
`;

export const SmallButton = styled(BaseButton)<ButtonProps>`
  ${(props) => {
    if (props.active) {
      return `
        color: ${props.theme.main.colors.white};
        background-color: ${props.theme.main.colors[props.color ? props.color : 'blue']};
      `
    } else {
      return `
        color: ${props.theme.main.colors[props.color ? props.color : 'blue']};
        background-color: ${props.theme.main.colors.transparent};
      `
    }
  }}

  border-radius: 100px;
  padding: 5px 18px 6px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.main.colors[props.color ? props.color : 'blue']};

  &:hover {
    color: ${(props) => props.theme.main.colors.white};
    background-color: ${(props) => props.theme.main.colors[props.color ? props.color : 'blue']};
  }
`;

export const DefaultButton = styled(BaseButton)<ButtonProps>`
  color: ${(props) => props.theme.main.colors.white};
  background-color: ${(props) => props.theme.main.colors.primary};
  font-size: 16px;
  width: 242px;
  height: 52px;

  &:hover, &:focus {
    background-color: ${(props) => props.theme.main.colors.highlight};
  }
`;

export const LinkButton = styled(BaseButton)<ButtonProps>`
  color: ${(props) => props.theme.main.colors[props.color ? props.color : 'primary']};
  background-color: ${(props) => props.theme.main.colors.transparent};
  font-size: 16px;
  padding: 0;
`;
