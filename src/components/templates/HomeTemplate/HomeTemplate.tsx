import React, { FC } from 'react';
import { Row, Col } from 'react-awesome-styled-grid'
import styled from 'styled-components';
import { AppBar, DesktopAppBar, Card } from 'components/organisms'
import { News } from 'models';

type HomeTemplateProps = {
  news: News[];
  isLoggedIn?: boolean;
  handleMenuClick: (slug: string) => void;
  handleLogoClick: () => void;
  handleAuthorClick: (author: string) => void;
  handleTagClick: (slug: string) => void;
  handleCardClick: (id: number) => void;
};

const StyledHomeTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

const mobile = (styles: string) => `@media only screen and (max-width: 919px) {${styles}}`;
const desktop = (styles: string) => `@media only screen and (min-width: 920px) {${styles}}`;

const StyledAppBar = styled(AppBar)`
  ${mobile(`display: flex;`)};
  ${desktop(`display: none;`)};
`;

const StyleDesktopAppBar = styled(DesktopAppBar)`
  ${mobile(`display: none;`)};
  ${desktop(`display: flex;`)};
`;

const StyledContainer = styled.div`
  margin: 0 15px;

  @media only screen and (min-width: 768px) {
    margin: 0 40px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0 130px;
  }
`;

const Separator = styled.div`
  width: 100%;
  border: 1px solid #E4E4E4;
  ${mobile(`display: none;`)};
  ${desktop(`display: flex;`)};
`;

export const HomeTemplate: FC<HomeTemplateProps> = ({ news, handleLogoClick, handleMenuClick, handleAuthorClick, handleTagClick, handleCardClick, isLoggedIn, ...props }) => {
  const [featuredNews, secondNews, thirdNews, ...listNews] = news;

  const setHandlers = (item: News) => {
    return {
      handleTagClick,
      handleAuthorClick: () => handleAuthorClick(item.author),
      handleTitleClick: () => handleCardClick(item.id),
      handleCardContentClick: () => handleCardClick(item.id),
      handleReadMoreClick: () => handleCardClick(item.id)
    }
  };

  return (
    <StyledHomeTemplate { ...props }>
      <StyledAppBar handleLogoClick={handleLogoClick} isLoggedIn={isLoggedIn} handleMenuClick={handleMenuClick} />
      <StyleDesktopAppBar handleLogoClick={handleLogoClick} isLoggedIn={isLoggedIn} handleMenuClick={handleMenuClick} />

      <StyledContainer>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Card featured {...featuredNews} {...setHandlers(featuredNews)} />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card {...secondNews}  {...setHandlers(secondNews)} />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card {...thirdNews}  {...setHandlers(thirdNews)} />
          </Col>
        </Row>

        <Row>
          <Separator></Separator>
        </Row>

        <Row>
          {
            listNews.map(({ image, ...item }) =>
              <Col xs={12} sm={6} md={4}>
                <Card {...item} {...setHandlers(item)} />
              </Col>
            )
          }
        </Row>
      </StyledContainer>
    </StyledHomeTemplate>
  );
};
