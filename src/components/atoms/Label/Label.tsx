import React, { FC } from 'react';
import styled from 'styled-components';

type LabelProps = {};

const StyledLabel = styled.label`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors.text};
  font-size: 14px;
`;

export const Label: FC<LabelProps> = ({ children, ...props }) =>
  <StyledLabel { ...props }>{ children }</StyledLabel>;
