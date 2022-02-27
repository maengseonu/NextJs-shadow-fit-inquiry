/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import { useMemo } from "react";
import { useTable } from "react-table";
import { Ttable, Ttd, Tth, Ttr } from "./styles/TableStyle";

const Table = ({ serverData }: any) => {
  const data: any = useMemo(() => serverData, []);

  const columns = useMemo(
    () => [
      {
        Header: "고유번호",
        accessor: "id",
      },
      {
        Header: () => <p style={{ width: 500 }}>제목</p>,
        accessor: "title",
      },
      {
        Header: "작성일",
        accessor: "create",
      },
    ],
    []
  );

  // () => <p style={{ width: 500 }}>제목</p>

  // 무조건 columns, data 이름으로 사용해야한다
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      // @ts-ignore
      columns,
      data,
    });

  return (
    <Ttable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Tth {...column.getHeaderProps()}>{column.render("Header")}</Tth>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Ttr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <Link href={`posts/${row.values.id}`}>
                    <Ttd {...cell.getCellProps()}>{cell.render("Cell")}</Ttd>
                  </Link>
                );
              })}
            </Ttr>
          );
        })}
      </tbody>
    </Ttable>
  );
};

export default Table;
