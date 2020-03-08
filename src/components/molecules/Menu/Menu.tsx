import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, Typography } from 'components/atoms';

type MenuProps = {
  handleMenuClick: (slug: string) => void;
};

const StyledMenu = styled.div`
  padding: 24px 0 130px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.main.colors.white};
`;

const StyledMenuItem = styled.div`
  margin-left: 32px;
  margin-bottom: 31px;
`;

export const Menu: FC<MenuProps> = ({ handleMenuClick, ...props}) => {
  const items = [
    { slug: 'politics', text: 'POLITICS' },
    { slug: 'business', text: 'BUSINESS' },
    { slug: 'tech', text: 'TECH' },
    { slug: 'science', text: 'SCIENCE' },
    { slug: 'sports', text: 'SPORTS' },
  ];

  return (
    <StyledMenu { ...props }>
      { items.map(({ slug, text }) =>
        <StyledMenuItem key={slug}>
          <Button onClick={() => handleMenuClick(slug)} variant="link" color="text">
            <Typography size="small">{ text }</Typography>
          </Button>
        </StyledMenuItem>
      )}

      <StyledMenuItem>
        <Button onClick={() => handleMenuClick('login')} variant="link" color="text">
          <Typography size="small" color="primary" weight="bold">LOGIN</Typography>
        </Button>
      </StyledMenuItem>
    </StyledMenu>
  );
}
