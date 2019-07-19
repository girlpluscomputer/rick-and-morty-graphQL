import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  height: 300px;
  width: 340px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  width: 100%;
  text-align: left;
  padding: 20px 0;
`;

const StyledInput = styled.input`
  height: 36px;
  width: 300px;
  padding: 0 16px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 2px solid gray;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid #00b0c8;
  }
`;

export { FormContainer, StyledForm, Label, StyledInput };
