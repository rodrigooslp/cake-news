import React, { FC } from 'react';
import { InterestTemplate, InterestFormData } from 'components';

export const Interests: FC = () => {
  const isLoggedIn = true;
  const username = 'Cheesecake-Labs';

  const handleSave = (data: InterestFormData) => {
    console.log(data);
  };

  const redirectToHome = (slug?: string) => {
    console.log(slug);
  };

  return (
    <InterestTemplate
      username={username}
      isLoggedIn={isLoggedIn}
      handleSave={handleSave}
      handleBack={redirectToHome}
      handleLogoClick={redirectToHome}
      handleMenuClick={redirectToHome}
    />
  );
};
