import React, { FC } from 'react';
import { ButtonProps, SmallButton, DefaultButton, LinkButton } from './Button.styled';

export const Button: FC<ButtonProps> = ({ type, variant, children, ...props }) => {
  switch (variant) {
    case 'small': return <SmallButton type={type || 'button'} { ...props }>{ children }</SmallButton>;
    case 'default': return <DefaultButton type={type || 'button'} { ...props }>{ children }</DefaultButton>;
    case 'link': return <LinkButton type={type || 'button'} { ...props }>{ children }</LinkButton>;
    default: return <DefaultButton type={type || 'button'} { ...props }>{ children }</DefaultButton>;
  }
}
