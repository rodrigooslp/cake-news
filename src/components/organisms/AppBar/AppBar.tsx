import React, { FC } from 'react';
import styled from 'styled-components';
import { Logo } from 'components/atoms';
import { MenuHandler } from 'components/organisms';

type AppBarProps = {
  isLoggedIn?: boolean;
  handleMenuClick: (slug: string) => void;
};

const StyledAppBar = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.main.colors.borders.appBar};
  position: relative;
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main.colors.white};
`;

export const AppBar: FC<AppBarProps> = ({ handleMenuClick, isLoggedIn, ...props }) => {

  return (
    <StyledAppBar { ...props }>
      <MenuHandler isLoggedIn={isLoggedIn} handleMenuClick={handleMenuClick} />
      <Logo />
    </StyledAppBar>
  );
};
