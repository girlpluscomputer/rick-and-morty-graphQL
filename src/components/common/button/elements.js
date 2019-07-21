import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  height: 36px;
  padding: 0 16px;
  font-weight: bold;
  cursor: pointer;

  ${props =>
    props.color === "white" &&
    `color: #fff;
  `}

  ${props =>
    props.shape === "round" &&
    `border-radius: 16px;
  `}
  
  ${props =>
    props.shape === "squared" &&
    `
    border-radius: 4px;
  `}

  ${props =>
    props.bcolor === "blue" &&
    `
    background-color: #00b0c8;
    `}

  ${props =>
    props.bcolor === "green" &&
    `
      background-color: #5fc471;
      `}
      
    

  

    
`;

const ButtonContainer = styled.div`
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;

  ${props =>
    props.align === "left" &&
    `
    justify-content: flex-start;
    `}

  ${props =>
    props.align === "right" &&
    `
    justify-content: flex-end;
    `}

  ${props =>
    props.align === "center" &&
    `
      justify-content: center;
      `}
`;

export { StyledButton, ButtonContainer };
