import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  width: 180px;
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  &:hover{
    border-bottom 4px solid #fff;
  }
`;

export default StyledLink;
