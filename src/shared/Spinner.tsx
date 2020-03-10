import React, { FC } from 'react';
import { CircleSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

type SpinnerProps = {
  loading: boolean;
}

const SpinnerContainer = styled.div`
  position: absolute;
  z-index: 25;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #869db77a;
`;

export const Spinner: FC<SpinnerProps> = ({ loading }) => {
  if (!loading) return <></>

  return(
    <SpinnerContainer>
      <CircleSpinner size={50} color='#566f8c' loading={loading} />
    </SpinnerContainer>
  )
}
