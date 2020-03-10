import React, { FC, useState, useLayoutEffect, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FakeService } from 'api';
import { HomeTemplate } from 'components';
import { News } from 'models';
import { Spinner } from 'shared';

interface HomeProps {
  match: any;
}

export const Home: FC<HomeProps> = ({ match }) => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [news, setNews] = useState<News []>([]);

  const redirect = (slug?: string) => {
    if (slug === 'interests') {
      history.push('/interests');
      return;
    };

    if (slug === 'logout') {
      localStorage.removeItem('cake-user');
      localStorage.removeItem('cake-token');
      history.push('/login');
      return;
    }

    if (slug === 'login') {
      history.push('/login');
      return;
    }

    if (slug) {
      history.push(`/tag/${slug}`);
      return;
    }

    history.push('/');
  };

  // this could show an author page
  const showAuthor = (author: string) => {
    console.log({ author });
  };

  // this could show the clicked news in more detail
  const showNews = (id: number) => {
    console.log({ id })
  };

  const getInterests = async () => {
    setLoading(true);
    const { interests } = await FakeService.getInterests();
    setNews(await FakeService.getNews(interests));
    setLoading(false);
  };

  const getByTag = async (tag: string) => {
    setLoading(true);
    setNews(await FakeService.getNews([tag]));
    setLoading(false);
  };

  useEffect(() => {
    const tag = match.params.slug;

    if (tag) getByTag(tag);
    else getInterests();
  }, [match]);

  useLayoutEffect(() => {
    const user = localStorage.getItem('cake-token');
    setIsLoggedIn(!!user);
  }, [history]);

  return (
    <>
      <Spinner loading={loading}/>
      <HomeTemplate
        news={news}
        isLoggedIn={isLoggedIn}
        handleCardClick={showNews}
        handleAuthorClick={showAuthor}
        handleTagClick={redirect}
        handleLogoClick={redirect}
        handleMenuClick={redirect}
      />
    </>
  );
};
