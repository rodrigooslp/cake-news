import React, { FC } from 'react';
import styled from 'styled-components';

type ImageProps = {
  featured?: boolean;
  src: string;
}

type AvatarProps = {
  handleAvatarClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  featured?: boolean;
  src: string;
};

const StyledAvatar = styled.img.attrs((props) => ({ src: props.src }))<ImageProps>`
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

export const Avatar: FC<AvatarProps> = ({ handleAvatarClick, src, featured, ...props }) =>
  <StyledAvatar onClick={handleAvatarClick} src={src} featured={featured} { ...props } />;
