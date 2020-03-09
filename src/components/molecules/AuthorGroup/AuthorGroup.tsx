import React, { FC } from 'react';
import styled from 'styled-components';
import { Author } from 'components/molecules';
import { Avatar } from 'components/atoms';

type AuthorGroupProps = {
  featured?: boolean;
  srcAvatar: string;
  handleAuthorClick: () => void;
};

const StyledAuthorGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  ${(props) => {
    if (props.featured) {
      return `
        margin-right: 10px;
      `;
    } else {
      return `
        margin-right: 7px;
      `;
    }
  }}
`;

export const AuthorGroup: FC<AuthorGroupProps> = ({ featured, srcAvatar, handleAuthorClick, children, ...props }) =>
  <StyledAuthorGroup {...props}>
    <StyledAvatar handleAvatarClick={handleAuthorClick} src={srcAvatar} featured={featured}/>
    <Author handleAuthorClick={handleAuthorClick}>{children}</Author>
  </StyledAuthorGroup>;
