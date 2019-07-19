import React from "react";
import { FormContainer, StyledForm, Label, StyledInput } from "./elements";
import Button from "../../../../common/button";

const FormLocation = ({ handleSubmit, handleChange }) => {
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

export default FormLocation;
