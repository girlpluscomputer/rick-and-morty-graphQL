import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 76px;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 140px);
  grid-column-gap: 20px;
  justify-content: center;
  justify-items: center;
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
  border-radius: 4px;
  border: 2px solid gray;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid #00b0c8;
  }
`;

const Selector = styled.select`
  height: 36px;
  width: 140px;
  padding: 0 16px;
  border-radius: 4px;
  border: 2px solid gray;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid #00b0c8;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-items: left;
`;

export {
  FormContainer,
  Container,
  StyledForm,
  Label,
  StyledInput,
  Selector,
  ButtonContainer
};
