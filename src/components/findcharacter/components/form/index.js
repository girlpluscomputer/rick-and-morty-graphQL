import React from "react";
import {
  FormContainer,
  Container,
  StyledForm,
  Label,
  StyledInput,
  Selector,
  ButtonContainer,
  Button
} from "./elements";

function Form({ handleSubmit, handleChange }) {
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Label>Find a character</Label>
        <StyledInput
          required
          name="name"
          type="text"
          placeholder="Example: Morty"
          onChange={handleChange}
        />
        <Container>
          <Selector name="status" placeholder="Status" onChange={handleChange}>
            <option value="">Select a status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </Selector>
          <Selector name="gender" placeholder="Gender" onChange={handleChange}>
            <option value="">Select a gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </Selector>
        </Container>
        <ButtonContainer>
          <Button type="submit">Search</Button>
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
