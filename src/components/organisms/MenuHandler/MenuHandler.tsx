import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Hamburger } from 'components/atoms';
import { Menu } from 'components/molecules';

type MenuHandlerProps = {
  isLoggedIn?: boolean;
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
  height: calc(100vh - 208px);
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 10;
`;

export const MenuHandler: FC<MenuHandlerProps> = ({ handleMenuClick, isLoggedIn, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleClickOutside = (event: any) => {
    if (!ref) return;
    if (!ref.current) return;
    if (!ref.current.contains(event.target)) setOpenMenu(false);
  }

  const handleWrapper = (slug: string) => {
    setOpenMenu(false);
    handleMenuClick(slug);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    if (openMenu) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [openMenu]);

  return (
    <StyledMenuHandler ref={ref} {...props}>
      <StyledHamburger onClick={() => setOpenMenu(!openMenu)}/>

      <MenuContainer open={openMenu}>
        <Menu isLoggedIn={isLoggedIn} handleMenuClick={handleWrapper}/>
      </MenuContainer>
    </StyledMenuHandler>
  );
};
