import React from 'react';
import { CardImage } from './CardImage';
import styled from 'styled-components';

export default {
  title: 'atoms/CardImage'
}

const Wrapper = styled.div`
  width: 550px;
  height: 350px;
`;

export const Example1 = () =>
  <Wrapper>
    <CardImage type='news-1' />
  </Wrapper>;

export const Example2 = () =>
  <Wrapper>
    <CardImage type='news-2' />
  </Wrapper>;

export const Example3 = () =>
  <Wrapper>
    <CardImage type='news-3' />
  </Wrapper>;
