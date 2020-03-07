import React, { FC } from 'react';
import styled from 'styled-components';
import image1x from 'assets/icons/logo.png';
import image2x from 'assets/icons/logo@2x.png';

type LogoProps = {};

const StyledLogo = styled.img.attrs({
  src: image1x,
  srcSet: `${image1x} 1x, ${image2x} 2x`
})`
  width: 45px;
  height: 45px;
`

export const Logo: FC<LogoProps> = (props) =>
  <StyledLogo { ...props } />;
