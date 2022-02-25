/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { UseSortByColumnOptions, useTable } from "react-table";

interface IData {
  id: string;
  create: string;
  title: string;
  text: string;
}

const Table = ({ serverData, posts }: any) => {
  //   console.log(serverData);
  //   console.log(columnData);

  const data: any = useMemo(() => serverData, []);

  const columns: any = useMemo(
    () => [
      {
        Header: "제목",
        accessor: "title",
      },
      {
        Header: "날짜",
        accessor: "create",
      },
    ],
    []
  );

  // 무조건 columns, data 이름으로 사용해야한다
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      // @ts-ignore
      columns,
      data,
    });

  // db에서 데이터 가져오기
  //   async function getResult() {
  //     try {
  //       const result = await axios.get("http://localhost:8080/posts");
  //       //   console.log(result.data);
  //       setPostsData(result.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   useEffect(() => {
  //     getResult();
  //   }, []);

  return (
    // <div>안녕</div>
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
