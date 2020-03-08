import React, { FC } from 'react';
import styled from 'styled-components';
import image1x from 'assets/icons/menu.png';
import image2x from 'assets/icons/menu@2x.png';

type HamburgerProps = {
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const StyledHamburger = styled.img.attrs({
  src: image1x,
  srcSet: `${image1x} 1x, ${image2x} 2x`
})`
  cursor: pointer;
`

export const Hamburger: FC<HamburgerProps> = (props) =>
  <StyledHamburger { ...props } />;
