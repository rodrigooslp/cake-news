import React, { FC, useState, useLayoutEffect, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FakeService } from 'api';
import { InterestTemplate, InterestFormData } from 'components';
import { Spinner } from 'shared';

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

  const redirect = (slug?: string) => {
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
    const token = localStorage.getItem('cake-token');

    if (!token || !user) {
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
  };

  useEffect(() => {
    getInterests();
  }, []);

  return (
    <>
      <Spinner loading={loading}/>
      <InterestTemplate
        selected={selected}
        username={username}
        isLoggedIn={isLoggedIn}
        handleSave={handleSave}
        handleBack={redirect}
        handleLogoClick={redirect}
        handleMenuClick={redirect}
      />
    </>
  );
};
