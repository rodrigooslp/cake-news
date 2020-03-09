import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, Typography } from 'components/atoms';

type CardOverlayProps = {
  handleReadMoreClick: () => void;
};

const StyledCardOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background-color: ${(props) => props.theme.main.colors.overlay};

  &:hover {
    opacity: 1;
  }
`

const StyledButton = styled(Button)`
  width: 151px;
  heigth: 45px;
  border: 1px solid ${(props) => props.theme.main.colors.white};
  background: rgba(0,0,0,0.50);

  &:focus {
    background: rgba(0,0,0,0.50);
  }

  &:hover {
    background: rgba(0,0,0,0.40);
  }
`;

export const CardOverlay: FC<CardOverlayProps> = ({ handleReadMoreClick, ...props }) =>
  <StyledCardOverlay {...props}>
    <StyledButton onClick={handleReadMoreClick}>
      <Typography color='white' size='md'>Read More</Typography>
    </StyledButton>
  </StyledCardOverlay>;

