/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import { useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import { IPostData } from "../pages/posts/[id]";
import { IPostState } from "../redux/types";
import { Ttd, Tth, Ttr } from "./TableStyle";

const Table = ({ serverData }: any) => {
  const data: any = useMemo(() => serverData, []);

  const columns: any = useMemo(
    () => [
      {
        Header: "고유번호",
        accessor: "id",
      },
      {
        Header: "제목",
        accessor: "title",
      },
      {
        Header: "작성일",
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

  //   const firstPageRows = rows.slice(0, 10);

  return (
    <table {...getTableProps()}>
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
    </table>
  );
};

export default Table;
