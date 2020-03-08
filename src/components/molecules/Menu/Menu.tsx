import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, Typography } from 'components/atoms';
import { NewsCategory } from 'models';

type MenuProps = {
  isLoggedIn?: boolean;
  handleMenuClick: (slug: string) => void;
};

const StyledMenu = styled.div`
  padding: 24px 0 130px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.main.colors.white};
  box-shadow: inset 0 -1px 4px -2px black;
`;

const StyledMenuItem = styled.div`
  margin-left: 32px;
  margin-bottom: 31px;
`;

export const Menu: FC<MenuProps> = ({ handleMenuClick, isLoggedIn, ...props}) => {
  const items = NewsCategory.getAllNewsCategories();

  return (
    <StyledMenu { ...props }>
      { items.map(({ slug, text }) =>
        <StyledMenuItem key={slug}>
          <Button onClick={() => handleMenuClick(slug)} variant="link" color="text">
            <Typography size="small">{ text }</Typography>
          </Button>
        </StyledMenuItem>
      )}

      {
        isLoggedIn &&
        <StyledMenuItem>
          <Button onClick={() => handleMenuClick('interests')} variant="link" color="text">
            <Typography size="small" color="primary" weight="bold">INTERESTS</Typography>
          </Button>
        </StyledMenuItem>
      }

      {
        !isLoggedIn &&
        <StyledMenuItem>
          <Button onClick={() => handleMenuClick('login')} variant="link" color="text">
            <Typography size="small" color="primary" weight="bold">LOGIN</Typography>
          </Button>
        </StyledMenuItem>
      }
    </StyledMenu>
  );
}
