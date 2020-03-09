import React, { FC } from 'react';
import styled from 'styled-components';
import { Welcome } from 'components/molecules';
import { AppBar, InterestForm, InterestFormData } from 'components/organisms'

type InterestTemplateProps = {
  username: string;
  isLoggedIn: boolean;
  handleMenuClick: (slug: string) => void;
  handleSave: (data: InterestFormData) => void;
  handleBack: () => void;
  handleLogoClick: () => void;
};

const StyledInterestTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledWelcome = styled(Welcome)`
  text-align: center;
  margin: 59px 0 61px;
`;

export const InterestTemplate: FC<InterestTemplateProps> = ({ isLoggedIn, username, handleLogoClick, handleMenuClick, handleSave, handleBack, ...props }) => {
  return (
    <StyledInterestTemplate { ...props }>
      <AppBar handleLogoClick={handleLogoClick} isLoggedIn={isLoggedIn} handleMenuClick={handleMenuClick} />
      <StyledWelcome username={username}/>
      <InterestForm handleSave={handleSave} handleBack={handleBack}/>
    </StyledInterestTemplate>
  );
};
