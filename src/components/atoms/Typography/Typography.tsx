import React, { FC } from 'react';
import { TypographyProps, StyledHeading, StyledSubheading, StyledContent } from './Typography.styled';

export const Typography: FC<TypographyProps> = ({ children, variant, ...props }) => {
  switch (variant) {
    case 'heading': return <StyledHeading { ...props }>{ children }</StyledHeading>;
    case 'subheading': return <StyledSubheading { ...props }>{ children }</StyledSubheading>;
    case 'content': return <StyledContent { ...props }>{ children }</StyledContent>;
    default: return <StyledContent { ...props }>{ children }</StyledContent>;
  }
}
