import React, { FC } from 'react';
import styled from 'styled-components';
import { Welcome } from 'components/molecules';
import { AppBar, InterestForm, InterestFormData } from 'components/organisms'

type InterestTemplateProps = {
  username: string;
  handleMenuClick: (slug: string) => void;
  handleSave: (data: InterestFormData) => void;
  handleBack: () => void;
};

const StyledInterestTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledWelcome = styled(Welcome)`
  text-align: center;
  margin: 59px 0 61px;
`;

export const InterestTemplate: FC<InterestTemplateProps> = ({ username, handleMenuClick, handleSave, handleBack, ...props }) => {
  return (
    <StyledInterestTemplate { ...props }>
      <AppBar handleMenuClick={handleMenuClick} />
      <StyledWelcome username={username}/>
      <InterestForm handleSave={handleSave} handleBack={handleBack}/>
    </StyledInterestTemplate>
  );
};
