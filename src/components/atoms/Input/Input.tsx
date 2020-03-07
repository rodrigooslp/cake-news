import React, { FC } from 'react';
import styled from 'styled-components';

type InputProps = {
  width?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
  font-family: ${(props) => props.theme.main.fontFamily};
  color: ${(props) => props.theme.main.colors.text};
  border: 1px solid ${(props) => props.theme.main.colors.borders.input};
  width: ${(props) => props.width};
  font-size: 18px;
  height: 40px;
  padding-left: 10px;
`;

export const Input: FC<InputProps> = (props) =>
  <StyledInput {...props} />;
