import styled from "styled-components";

export const Ttable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const Tth = styled.td`
  border: 1px solid #ddd;
  width: 180px;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #ececec;
  color: black;
`;

export const Ttd = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const Ttr = styled.tr`
  :hover {
    background-color: #ddd;
    cursor: pointer;
  }
  /* :nth-child(even) {
    background-color: #f2f2f2;
  } */
`;
