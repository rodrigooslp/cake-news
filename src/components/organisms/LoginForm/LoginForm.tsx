import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms';
import { FormGroup } from 'components/molecules';

type LoginFormData = {
  username: string;
  password: string;
}

type LoginFormProps = {
  handleLogin: (data: LoginFormData) => void;
};

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormGroup = styled(FormGroup)`
  margin-bottom: 22px;
`;

export const LoginForm: FC<LoginFormProps> = ({ handleLogin, ...props }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin({ username, password });
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit} { ...props }>
      <StyledFormGroup id='username' label='USERNAME' handleChange={setUsername}/>
      <StyledFormGroup id='password' label='PASSWORD' type="password" handleChange={setPassword}/>
      <Button type="submit">LOGIN</Button>
    </StyledLoginForm>
  );
};
