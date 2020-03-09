import React, { FC } from 'react';
import styled from 'styled-components';
import { AppBar, DesktopAppBar } from 'components/organisms'

type HomeTemplateProps = {
  isLoggedIn?: boolean;
  handleMenuClick: (slug: string) => void;
  handleLogoClick: () => void;
};

const StyledHomeTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

const mobile = (styles: string) => `@media only screen and (max-width: 919px) {${styles}}`;
const desktop = (styles: string) => `@media only screen and (min-width: 920px) {${styles}}`;

const StyledAppBar = styled(AppBar)`
  ${mobile(`display: flex;`)};
  ${desktop(`display: none;`)};
`;

const StyleDesktopAppBar = styled(DesktopAppBar)`
  ${mobile(`display: none;`)};
  ${desktop(`display: flex;`)};
`;

export const HomeTemplate: FC<HomeTemplateProps> = ({ handleLogoClick, handleMenuClick, isLoggedIn, ...props }) => {
  return (
    <StyledHomeTemplate { ...props }>
      <StyledAppBar handleLogoClick={handleLogoClick} isLoggedIn={isLoggedIn} handleMenuClick={handleMenuClick} />
      <StyleDesktopAppBar handleLogoClick={handleLogoClick} isLoggedIn={isLoggedIn} handleMenuClick={handleMenuClick} />
    </StyledHomeTemplate>
  );
};
