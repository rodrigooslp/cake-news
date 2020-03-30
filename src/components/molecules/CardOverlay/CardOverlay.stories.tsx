import React from 'react';
import { CardOverlay } from './CardOverlay';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/CardOverlay'
}

const Wrapper = styled.div`
  width: 550px;
  height: 350px;
  position: relative;
`;

export const Default = () =>
  <Wrapper>
    <CardOverlay handleReadMoreClick={action('clicked')}/>
  </Wrapper>;
