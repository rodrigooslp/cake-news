import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { InterestPicker, InterestActions } from 'components/molecules';

export type InterestFormData = {
  interests: string[];
}

type InterestFormProps = {
  handleSave: (data: InterestFormData) => void;
  handleBack: () => void;
};

const StyledInterestForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInterestActions = styled(InterestActions)`
  margin-top: 51px;
`;

export const InterestForm: FC<InterestFormProps> = ({ handleSave, handleBack, ...props }) => {
  const [interests, setInterests] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSave({ interests });
  };

  const handleAddInterest = (slug: string) => {
    setInterests([ ...interests, slug ]);
  };

  const handleRemoveInterest = (slug: string) => {
    setInterests(interests.filter(i => i !== slug));
  };

  return (
    <StyledInterestForm onSubmit={handleSubmit} { ...props }>
      <InterestPicker
        selectedInterests={interests}
        handleAddInterest={handleAddInterest}
        handleRemoveInterest={handleRemoveInterest}/>

      <StyledInterestActions handleBack={handleBack}/>
    </StyledInterestForm>
  );
};
