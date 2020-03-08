import React, { FC } from 'react';
import { ButtonProps, SmallButton, DefaultButton, LinkButton } from './Button.styled';

export const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
  switch (variant) {
    case 'small': return <SmallButton { ...props }>{ children }</SmallButton>;
    case 'default': return <DefaultButton { ...props }>{ children }</DefaultButton>;
    case 'link': return <LinkButton { ...props }>{ children }</LinkButton>;
    default: return <DefaultButton { ...props }>{ children }</DefaultButton>;
  }
}
