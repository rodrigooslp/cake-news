import React, { FC } from 'react';
import styled from 'styled-components';
import { CardTag, CardTitle, CardOverlay, AuthorGroup, CardContent } from 'components/molecules';
import { CardImage, ExampleNews } from 'components/atoms';
import { NewsType } from 'models';

type StyledCardTagProps = {
  hasImage: boolean;
}

type CardProps = {
  type: NewsType;
  featured?: boolean;
  image?: ExampleNews;
  title: string;
  avatar: string;
  author: string;
  content: string;
  handleTagClick: (slug: NewsType) => void;
  handleTitleClick: () => void;
  handleReadMoreClick: () => void;
  handleAuthorClick: () => void;
  handleCardContentClick: () => void;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 20px;
`;

const StyledCardTag = styled(CardTag)<StyledCardTagProps>`
  align-self: flex-start;
  margin-bottom: ${(props) => props.hasImage ? `8px` : `5px`};
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const StyledCardContent = styled(CardContent)`
  margin-top: 20px;
`;

export const Card: FC<CardProps> = ({
  type,
  featured,
  image,
  title,
  avatar,
  author,
  content,
  handleTagClick,
  handleTitleClick,
  handleReadMoreClick,
  handleAuthorClick,
  handleCardContentClick,
  ...props }) =>
  <StyledCard {...props}>
    <StyledCardTag hasImage={!!image} handleTagClick={handleTagClick} type={type} />

    {
      image &&
      <ImageContainer>
        <CardOverlay handleReadMoreClick={handleReadMoreClick}/>
        <CardImage type={image}/>
      </ImageContainer>
    }

    <CardTitle featured={featured} handleTitleClick={handleTitleClick}>{title}</CardTitle>
    <AuthorGroup srcAvatar={avatar} handleAuthorClick={handleAuthorClick}>{author}</AuthorGroup>

    {
      !featured &&
      <StyledCardContent handleCardContentClick={handleCardContentClick}>{content}</StyledCardContent>
    }
  </StyledCard>
;
