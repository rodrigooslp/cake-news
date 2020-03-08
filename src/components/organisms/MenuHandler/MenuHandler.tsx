import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Hamburger } from 'components/atoms';
import { Menu } from 'components/molecules';

type MenuHandlerProps = {
  handleMenuClick: (slug: string) => void;
};

type MenuContainerProps = {
  open: boolean;
};

const StyledMenuHandler = styled.div`
  background-color: ${(props) => props.theme.main.colors.white};
`;

const StyledHamburger = styled(Hamburger)`
  position: absolute;
  left: 52px;
  top: 18px;
`;

const MenuContainer = styled.div<MenuContainerProps>`
  position: absolute;
  top: 57px;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;

export const MenuHandler: FC<MenuHandlerProps> = ({ handleMenuClick, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleClickOutside = (event: any) => {
    if (!ref) return;
    if (!ref.current) return;
    if (!ref.current.contains(event.target)) setOpenMenu(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <StyledMenuHandler ref={ref}>
      <StyledHamburger onClick={() => setOpenMenu(!openMenu)}/>

      <MenuContainer open={openMenu}>
        <Menu handleMenuClick={handleMenuClick}/>
      </MenuContainer>
    </StyledMenuHandler>
  );
};
