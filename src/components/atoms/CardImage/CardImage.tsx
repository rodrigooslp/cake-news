import React, { FC } from 'react';
import styled from 'styled-components';

import news1 from 'assets/images/news_01.jpg';
import news1at2x from 'assets/images/news_01@2x.png';

import news2 from 'assets/images/news_02.jpg';
import news2at2x from 'assets/images/news_02@2x.jpg';

import news3 from 'assets/images/news_03.jpg';
import news3at2x from 'assets/images/news_03@2x.jpg';

type ImageProps = {
  src: string;
  srcSet: string;
}

type CardImageProps = {
  type: 'news-1' | 'news-2' | 'news-3';
};

const StyledCardImage = styled.img.attrs((props) => ({ src: props.src, srcSet: props.srcSet }))<ImageProps>`
  cursor: pointer;
  width: 100%;
  height: 100%;
`

export const CardImage: FC<CardImageProps> = ({ type, ...props }) => {
  const createSrcSet = (image1x: string, image2x: string) =>
    `${image1x} 1x, ${image2x} 2x`;

  switch (type) {
    case 'news-1': return <StyledCardImage src={news1} srcSet={createSrcSet(news1, news1at2x)} { ...props } />;
    case 'news-2': return <StyledCardImage src={news2} srcSet={createSrcSet(news2, news2at2x)} { ...props } />;
    case 'news-3': return <StyledCardImage src={news3} srcSet={createSrcSet(news3, news3at2x)} { ...props } />;
    default: return <></>;
  }
};

