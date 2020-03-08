import React, { FC } from 'react';
import styled from 'styled-components';
import { Label, Button } from 'components/atoms';

type Interest = {
  slug: 'politics' | 'business' | 'tech' | 'science' | 'sports';
  text: 'POLITICS' | 'BUSINESS' | 'TECH' | 'SCIENCE' | 'SPORTS';
  color: 'red' | 'purple' | 'blue' | 'green' | 'yellow';
};

type InterestPickerProps = {
  selectedInterests: string[];
  handleAddInterest: (interest: string) => void;
  handleRemoveInterest: (interest: string) => void;
};

const media = (styles: string) => `@media only screen and (max-width: 530px) {${styles}}`;

const StyledInterestPicker = styled.div`
  ${media(`
    display: flex;
    flex-direction: column;
    align-items: center;
  `)}
`;

const StyledPickerContainer = styled.div`
  margin-top: 24px;
`;

const StyledButtonContainer = styled.div`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 14px;
  }

  ${media(`
    width: 100%;
    display: flex;
    justify-content: center;

    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 14px;
    }
  `)}
`;

export const InterestPicker: FC<InterestPickerProps> = ({ selectedInterests, handleAddInterest, handleRemoveInterest, ...props }) => {
  const items: Interest[] = [
    { slug: 'politics', text: 'POLITICS', color: 'red' },
    { slug: 'business', text: 'BUSINESS', color: 'purple' },
    { slug: 'tech', text: 'TECH', color: 'blue' },
    { slug: 'science', text: 'SCIENCE', color: 'green' },
    { slug: 'sports', text: 'SPORTS', color: 'yellow' }
  ];

  const handleClick = (slug: string) => {
    if (selectedInterests.includes(slug)) {
      handleRemoveInterest(slug);
    } else {
      handleAddInterest(slug);
    }
  };

  return (
    <StyledInterestPicker { ...props }>
      <Label>MY INTERESTS</Label>
      <StyledPickerContainer>
        { items.map(({ slug, text, color }: Interest) =>
          <StyledButtonContainer key={slug}>
            <Button
              color={color}
              variant='small'
              onClick={() => handleClick(slug)}
              active={selectedInterests.includes(slug)}>
                {text}
            </Button>
          </StyledButtonContainer>
        ) }
      </StyledPickerContainer>
    </StyledInterestPicker>
  );
};
