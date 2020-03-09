import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'components/atoms';
import { AppBar, LoginForm, LoginFormData } from 'components/organisms'

type LoginTemplateProps = {
  isLoggedIn?: boolean;
  handleMenuClick: (slug: string) => void;
  handleLogin: (data: LoginFormData) => void;
  handleLogoClick: () => void;
};

const StyledLoginTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  margin: 58px 0 63px;
`;

export const LoginTemplate: FC<LoginTemplateProps> = ({ handleLogoClick, handleMenuClick, isLoggedIn, handleLogin, ...props }) => {
  return (
    <StyledLoginTemplate { ...props }>
      <AppBar handleLogoClick={handleLogoClick} isLoggedIn={isLoggedIn} handleMenuClick={handleMenuClick} />
      <StyledTypography variant='heading'>USER AREA</StyledTypography>
      <LoginForm handleLogin={handleLogin}/>
    </StyledLoginTemplate>
  );
};
