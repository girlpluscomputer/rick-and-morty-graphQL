import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  overflow-x: auto;
`;

const StyledBodyTable = styled.tbody`
  border-radius: 4px;
  display: block;
`;

const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  margin: 0 40px;
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.th`
  font-size: 14px;
  border-bottom: 1px solid #ddd;
  padding: 0 16px;
`;
const StyledRow = styled.tr`
  height: 36px;
  text-align: left;
  border-radius: 16px;
`;

const StyledCell = styled.td`
  min-width: 180px;
  font-size: 12px;
  padding: 0 16px;
  border-bottom: 1px solid #ddd;
  background-color: #f2f2f2;
`;

export {
  TableContainer,
  StyledBodyTable,
  StyledTable,
  StyledHeader,
  StyledRow,
  StyledCell
};
