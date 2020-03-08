import React, { FC } from 'react';
import styled from 'styled-components';

type AvatarProps = {
  featured?: boolean;
  src: string;
};

const StyledAvatar = styled.img.attrs((props) => ({ src: props.src }))<AvatarProps>`
  cursor: pointer;
  border-radius: 45px;

  ${(props) => {
    if (props.featured) {
      return`
        width: 45px;
        height: 45px;
      `
    } else {
      return `
        width: 32px;
        height: 32px;
      `
    }
  }}
`

export const Avatar: FC<AvatarProps> = ({ src, featured, ...props }) =>
  <StyledAvatar src={src} featured={featured} { ...props } />;
