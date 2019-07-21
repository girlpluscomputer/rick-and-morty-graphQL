import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 40px 0;
  font-family: "Roboto", sans-serif;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  width: 300px;
  height: 300px;

  @media only screen and (max-width: 768px) {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 16px;
  }
`;

const CardDescription = styled.div`
  width: 300px;
  height: 300px;
  padding: 32px;
  background-color: #fff;
  font-size: 12px;
  border-radius: 16px;
`;

const Data = styled.h3`
  max-width: 100%;
  font-weight: normal;
  background-color: #fff;
`;
const Label = styled.label`
  width: 75px;
  font-weight: bold;
  background-color: #fff;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  background-color: #fff;
`;

export {
  LoaderContainer,
  CardContainer,
  StyledCard,
  CardImage,
  CardDescription,
  Data,
  Label,
  Item
};
