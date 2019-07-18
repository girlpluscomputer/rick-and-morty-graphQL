import styled, { keyframes } from "styled-components";

const LoaderKeyFrames = keyframes`
    0% {
        margin-bottom: 0;
    }
    50% {
        margin-bottom: 15px;
    }
    100% {
        margin-bottom: 0;
    }
`;
const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderItem = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${LoaderKeyFrames} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

export { LoaderContainer, LoaderItem, LoaderKeyFrames };
