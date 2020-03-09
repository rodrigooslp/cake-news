import React, { FC, useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginTemplate, LoginFormData } from 'components';
import { FakeService } from 'api';

export const Login: FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (data: LoginFormData) => {
    setLoading(true);
    const { username, token } = await FakeService.login(data);

    localStorage.setItem('cake-user', username);
    localStorage.setItem('cake-token', token);

    setLoading(false);
    history.push('/');
  };

  const redirectToHome = (slug?: string) => {
    if (slug === 'login') return;

    if (slug) {
      history.push(`/tag/${slug}`);
    } else {
      history.push('/');
    }
  };

  useLayoutEffect(() => {
    if (localStorage.getItem('cake-user')) history.push('/');
  }, [history]);

  return (
    <LoginTemplate
      handleLogin={handleLogin}
      handleLogoClick={redirectToHome}
      handleMenuClick={redirectToHome}
    />
  );
};
