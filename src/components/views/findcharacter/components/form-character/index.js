import React from "react";
import {
  FormContainer,
  Container,
  StyledForm,
  Label,
  StyledInput,
  Selector
} from "./elements";
import Button from "../../../../common/button";

const FormCharacter = ({ handleSubmit, handleChange }) => {
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

        <Button
          bcolor="blue"
          color="white"
          shape="squared"
          type="submit"
          text="Search"
          align="left"
        />
      </StyledForm>
    </FormContainer>
  );
};

export default FormCharacter;
