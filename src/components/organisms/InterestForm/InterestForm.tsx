import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { InterestPicker, InterestActions } from 'components/molecules';

export type InterestFormData = {
  interests: string[];
}

type InterestFormProps = {
  selected?: string[];
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

export const InterestForm: FC<InterestFormProps> = ({ selected, handleSave, handleBack, ...props }) => {
  const [interests, setInterests] = useState<string[]>(selected || []);

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

  useEffect(() => {
    setInterests(selected || []);
  }, [selected]);

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
