import React, { FC } from 'react';
import { LoginTemplate, LoginFormData } from 'components';

export const Login: FC = () => {
  const handleLogin = (data: LoginFormData) => {
    console.log(data);
  };

  const redirectToHome = (slug?: string) => {
    console.log(slug);
  };

  return (
    <LoginTemplate
      handleLogin={handleLogin}
      handleLogoClick={redirectToHome}
      handleMenuClick={redirectToHome}
    />
  );
};
