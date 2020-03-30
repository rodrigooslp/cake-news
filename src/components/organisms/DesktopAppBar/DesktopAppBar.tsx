import React, { FC } from 'react';
import styled from 'styled-components';
import { Logo, Button, Typography } from 'components/atoms';
import { NewsCategory } from 'models';

type DesktopAppBarProps = {
  isLoggedIn?: boolean;
  handleMenuClick: (slug: string) => void;
  handleLogoClick: () => void;
};

const StyledDesktopAppBar = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.main.colors.borders.appBar};
  position: relative;
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.main.colors.white};
  padding: 0 130px;
`;

const StyledLogo = styled(Logo)`
  margin-right: auto;
`;

const StyledNav = styled.nav`
  display: flex;
`;

const StyledMenuItem = styled.div`
  margin-left: 29px;
`;

export const DesktopAppBar: FC<DesktopAppBarProps> = ({ handleLogoClick, handleMenuClick, isLoggedIn, ...props }) => {
  const items = NewsCategory.getAllNewsCategories();

  return (
    <StyledDesktopAppBar { ...props }>
      <StyledLogo handleLogoClick={handleLogoClick}/>
      <StyledNav>
        { items.map(({ slug, text }) =>
          <StyledMenuItem key={slug}>
            <Button onClick={() => handleMenuClick(slug)} variant="link" color="text">
              <Typography size="sm">{ text }</Typography>
            </Button>
          </StyledMenuItem>
        )}

      {
        isLoggedIn &&
        <StyledMenuItem>
          <Button onClick={() => handleMenuClick('interests')} variant="link" color="text">
            <Typography size="sm" color="primary" weight="bold">INTERESTS</Typography>
          </Button>
        </StyledMenuItem>
      }

      {
        isLoggedIn &&
        <StyledMenuItem>
          <Button onClick={() => handleMenuClick('logout')} variant="link" color="text">
            <Typography size="sm" color="primary" weight="bold">LOGOUT</Typography>
          </Button>
        </StyledMenuItem>
      }

      {
        !isLoggedIn &&
        <StyledMenuItem>
          <Button onClick={() => handleMenuClick('login')} variant="link" color="text">
            <Typography size="sm" color="primary" weight="bold">LOGIN</Typography>
          </Button>
        </StyledMenuItem>
      }
      </StyledNav>
    </StyledDesktopAppBar>
  );
};
