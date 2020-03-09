import { action } from '@storybook/addon-actions';
import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

export default {
  title: 'organisms/Card'
}

const Wrapper = styled.div`
  width: 550px;
  height: 350px;
`;

export const Featured = () =>
  <Wrapper>
    <Card
      featured
      type='politics'
      image='news-1'
      title='Obama Offers Hopeful Vision While Noting Nation’s Fears'
      avatar='https://i.pravatar.cc/45?u=pambeesly@dundermifflin.com'
      author='Pam Beesly'
      content='In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic system they view as rigged.'
      handleTagClick={action('clicked tag')}
      handleTitleClick={action('clicked title')}
      handleReadMoreClick={action('clicked read more')}
      handleAuthorClick={action('clicked author')}
      handleCardContentClick={action('clicked content')}
    />
  </Wrapper>;

export const Default = () =>
  <Wrapper>
    <Card
      type='tech'
      image='news-2'
      title='Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps'
      avatar='https://i.pravatar.cc/45?u=pambeesly@dundermifflin.com'
      author='Pam Beesly'
      content='One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.'
      handleTagClick={action('clicked tag')}
      handleTitleClick={action('clicked title')}
      handleReadMoreClick={action('clicked read more')}
      handleAuthorClick={action('clicked author')}
      handleCardContentClick={action('clicked content')}
    />
  </Wrapper>;
