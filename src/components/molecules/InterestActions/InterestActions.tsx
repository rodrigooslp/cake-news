import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms';

type InterestActionsProps = {
  handleSave: () => void;
  handleBack: () => void;
};

const StyledInterestActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: 27px;
`;

export const InterestActions: FC<InterestActionsProps> = ({ handleSave, handleBack, ...props }) => {
  return (
    <StyledInterestActions { ...props }>
      <StyledButton onClick={() => handleSave()}>SAVE</StyledButton>
      <Button variant='link' onClick={() => handleBack()}>BACK TO HOME</Button>
    </StyledInterestActions>
  );
};
