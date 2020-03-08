import React, { FC } from 'react';
import styled from 'styled-components';
import { Label, Input } from 'components/atoms';

type FormGroupContainerProps = {
  width?: string;
};

type FormGroupProps = {
  id?: string;
  label: string;
  type?: 'text' | 'password';
  handleChange: (value: string) => void;
};

const StyledFormGroup = styled.div<FormGroupContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;

const StyledLabel = styled(Label)`
  margin-bottom: 10px;
`;

export const FormGroup: FC<FormGroupProps & FormGroupContainerProps> = ({ id, label, width, type, handleChange, ...props }) => {
  return (
    <StyledFormGroup width={width || '242px'} { ...props }>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <Input id={id} type={type} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}/>
    </StyledFormGroup>
  );
};
