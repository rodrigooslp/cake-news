import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'components/atoms';
import { NewsType, NewsCategory } from 'models';

type CardTagProps = {
  handleTagClick: (slug: NewsType) => void;
  type: NewsType;
};

const StyledTypography = styled(Typography)`
  font-size: ${(props) => props.theme.main.fontSizes.xxs};
  cursor: pointer;
`;

export const CardTag: FC<CardTagProps> = ({ handleTagClick, type, ...props }) => {
  const item = NewsCategory.findCategory(type);
  return (
    <Button variant='link' onClick={() => handleTagClick(item.slug)} {...props}>
      <StyledTypography color={item.color}>{item.text}</StyledTypography>
    </Button>
  );
};
