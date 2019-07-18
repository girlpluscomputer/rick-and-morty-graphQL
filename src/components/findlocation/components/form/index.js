import React from "react";
import {
  FormContainer,
  StyledForm,
  Label,
  StyledInput,
  ButtonContainer,
  Button
} from "./elements";

function FormLocation({ handleSubmit, handleChange }) {
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Label>Find Location</Label>
        <StyledInput
          required
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Example: Earth"
        />
        <ButtonContainer>
          <Button type="submit">Search</Button>
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
}

export default FormLocation;
