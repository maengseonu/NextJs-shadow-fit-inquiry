/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { useTable } from "react-table";

function TestTable() {
  const data: any = useMemo(
    () => [
      {
        title: "제목1",
        create: "2020-02-25",
      },
      {
        title: "제목2",
        create: "2020-02-25",
      },
      {
        title: "제목3",
        create: "2020-02-25",
      },
    ],
    []
  );
  console.log(data);

  const columns: any = useMemo(
    () => [
      {
        Header: "제목",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "날짜",
        accessor: "create",
      },
    ],
    []
  );

  console.log(columns);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
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
}

export default TestTable;
