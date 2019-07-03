import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%
  height: 48px;
  display:flex;
  justify-content: center;
  font-size: 12px;
  margin-top: 20px
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 0px 10px 10px -15px #111;
`;

const LogoContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: 180px;
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  &:hover{
    border-bottom 4px solid #fff;
  }

`;

export { NavbarContainer, LogoContainer, Item };
