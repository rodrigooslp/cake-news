import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms';

type InterestActionsProps = {
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

export const InterestActions: FC<InterestActionsProps> = ({ handleBack, ...props }) => {
  return (
    <StyledInterestActions { ...props }>
      <StyledButton type='submit'>SAVE</StyledButton>
      <Button variant='link' onClick={() => handleBack()}>BACK TO HOME</Button>
    </StyledInterestActions>
  );
};
