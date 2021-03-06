import { action } from '@storybook/addon-actions';
import React from 'react';
import { HomeTemplate } from './HomeTemplate';
import { News } from 'models';

export default {
  title: 'templates/HomeTemplate'
}

const news: News[] = [{
  id: 1,
  type: 'politics',
  image: 'news-1',
  title: 'Obama Offers Hopeful Vision While Noting Nation’s Fears',
  avatar: 'https://i.pravatar.cc/45?u=pambeesly@dundermifflin.com',
  author: 'Pam Beesly',
  content: 'In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic system they view as rigged.'
}, {
  id: 2,
  type: 'tech',
  image: 'news-2',
  title: 'Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps',
  avatar: 'https://i.pravatar.cc/45?u=thats@verylongname.com',
  author: 'Pam Beesly',
  content: 'One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.'
}, {
  id: 3,
  type: 'science',
  image: 'news-3',
  title: 'NASA Formalizes Efforts To Protect Earth From Asteroids',
  avatar: 'https://i.pravatar.cc/45?u=pambeesly@dundermifflin.com',
  author: 'Alexandre Henrique Shailesh Zeta-Jones',
  content: 'Last week, NASA announced a new program called the Planetary Defense Coordination Office (PDCO) which will coordinate NASA’s efforts for detecting and tracking near-Earth objects (NEOs). If a large object comes hurtling toward our planet… '
}, {
  id: 4,
  type: 'sports',
  title: 'For Some Atlanta Hawks, a Revved-Up Game of Uno Is Diversion No. 1',
  avatar: 'https://i.pravatar.cc/45?u=pambeesly@dundermifflin.com',
  author: 'Pam Beesly',
  content: 'The favored in-flight pastime of a group of players including Al Horford, Kent Bazemore and Dennis Schroder is a schoolchildren’s card game with some added twists.'
}, {
  id: 5,
  type: 'tech',
  title: 'Picking a Windows 10 Security Package',
  avatar: 'https://i.pravatar.cc/45?u=pambeesly@dundermifflin.com',
  author: 'Pam Beesly',
  content: 'Oscar the Grouch has a recycling bin and Big Bird has moved to a tree as the children’s classic debuts on HBO, aiming at a generation that doesn’t distinguish between TV and mobile screens.'
}, {
  id: 6,
  type: 'science',
  title: 'As U.S. Modernizes Nuclear Weapons, ‘Smaller’ Leaves Some Uneasy',
  avatar: 'https://i.pravatar.cc/45?u=pambeesly@dundermifflin.com',
  author: 'Pam Beesly',
  content: 'The Energy Department and the Pentagon have been readying a weapon with a build-it-smaller approach, setting off a philosophical clash in the world of nuclear arms.'
}];

export const Default = () =>
  <HomeTemplate
    news={news}
    handleTagClick={action('clicked tag')}
    handleCardClick={action('clicked card')}
    handleAuthorClick={action('clicked author')}
    handleLogoClick={action('clicked logo')}
    handleMenuClick={action('clicked menu')}
  />;

  export const LoggedIn = () =>
  <HomeTemplate
    isLoggedIn
    news={news}
    handleTagClick={action('clicked tag')}
    handleCardClick={action('clicked card')}
    handleAuthorClick={action('clicked author')}
    handleLogoClick={action('clicked logo')}
    handleMenuClick={action('clicked menu')}
  />;
