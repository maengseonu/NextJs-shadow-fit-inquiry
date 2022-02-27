import styled from "styled-components";

export const Ttable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  /* border-collapse: collapse; */
  border-spacing: 0;
  border: 1px solid #ececec;
  border-radius: 5px;
`;

export const Tth = styled.td`
  padding: 0.5rem;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #ececec;
  color: black;
  height: 5px;
  margin: 0;
  font-weight: 1000;
`;

export const Ttd = styled.th`
  padding: 0.5rem;
  text-align: center;
  margin: 0;
  border-bottom: 1px solid #ececec;
  font-weight: 300;
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
