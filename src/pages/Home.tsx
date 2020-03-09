import React, { FC, useState, useLayoutEffect, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HomeTemplate } from 'components';
import { News } from 'models';
import { FakeService } from 'api';
import { Spinner } from 'shared';

interface HomeProps {
  match: any;
}

export const Home: FC<HomeProps> = ({ match }) => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [news, setNews] = useState<News []>([]);

  const redirectToHome = (slug?: string) => {
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

  const showAuthor = (author: string) => {
    console.log({ author });
  };

  const showNews = (id: number) => {
    console.log({ id })
  };

  const showTag = (slug: string) => {
    console.log({ slug });
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
    const user = localStorage.getItem('cake-user');
    setIsLoggedIn(!!user);
  }, [history]);

  return (
    <>
      <Spinner loading={loading}/>
      <HomeTemplate
        news={news}
        isLoggedIn={isLoggedIn}
        handleTagClick={showTag}
        handleCardClick={showNews}
        handleAuthorClick={showAuthor}
        handleLogoClick={redirectToHome}
        handleMenuClick={redirectToHome}
      />
    </>
  );
};
