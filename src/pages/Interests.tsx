import React, { FC, useState, useLayoutEffect, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { InterestTemplate, InterestFormData } from 'components';
import { FakeService } from 'api';

export const Interests: FC = () => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  const handleSave = async (data: InterestFormData) => {
    setLoading(true);
    await FakeService.saveInterests(data);

    setLoading(false);
    history.push('/');
  };

  const redirectToHome = (slug?: string) => {
    if (slug === 'interests') return;

    if (slug === 'logout') {
      localStorage.removeItem('cake-user');
      localStorage.removeItem('cake-token');
      history.push('/login');
      return;
    }

    if (slug) {
      history.push(`/tag/${slug}`);
      return;
    }

    history.push('/');
  };

  useLayoutEffect(() => {
    const user = localStorage.getItem('cake-user');
    if (!user) {
      history.push('/login');
      return;
    }

    setIsLoggedIn(!!user);
    setUsername(user);
  }, [history]);

  const getInterests = async () => {
    setLoading(true);
    const { interests } = await FakeService.getInterests();
    setSelected(interests);
    setLoading(false);
    console.log(interests);
  };

  useEffect(() => {
    getInterests();
  }, []);

  return (
    <InterestTemplate
      selected={selected}
      username={username}
      isLoggedIn={isLoggedIn}
      handleSave={handleSave}
      handleBack={redirectToHome}
      handleLogoClick={redirectToHome}
      handleMenuClick={redirectToHome}
    />
  );
};
