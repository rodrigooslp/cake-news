import React, { FC } from 'react';
import { HomeTemplate } from 'components';
import { News } from 'models';
import data from './news.json';

export const Home: FC = () => {
  const isLoggedIn = true;
  const news: News[] = JSON.parse(JSON.stringify(data));

  const redirectToHome = (slug?: string) => {
    console.log({ slug });
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

  return (
    <HomeTemplate
      news={news}
      isLoggedIn={isLoggedIn}
      handleTagClick={showTag}
      handleCardClick={showNews}
      handleAuthorClick={showAuthor}
      handleLogoClick={redirectToHome}
      handleMenuClick={redirectToHome}
    />
  );
};
