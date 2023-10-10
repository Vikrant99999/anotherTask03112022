import React, { Fragment, useMemo } from "react";
import "../Booking/reacttable.css";
// external imports for the table
import GlobalFilter from "../utils/GloableFilter";

import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
// creating data
const datas = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const RoomType = () => {
  const data = useMemo(() => [...datas], [datas]);
  const columns = useMemo(
    () =>
      datas[0]
        ? Object.keys(datas[0]).map((key) => {
            return { Header: key, accessor: key };
          })
        : [],
    [datas]
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  return (
    <Fragment>
      <div className="global-side-div-container">
        <div className="allbooking-table-container">
          <div className="global-react-talbe-view">
            <div className="global-react-table-header">
              <h2>Room Type</h2>
              <div className="adminViewHeaderLinks">
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  setGlobalFilter={setGlobalFilter}
                  globalFilter={state.globalFilter}
                />
                <span className="how-Much-show-On-Page">
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                  >
                    {[10, 25, 50, 100].map((element) => (
                      <option key={element} value={element}>
                        show {element}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
            </div>
            {datas && (
              <div className="global-table-container">
                <table {...getTableProps()} className="global-react-table">
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                          >
                            {column.isSorted
                              ? column.isSortedDesc
                                ? "▼  "
                                : "▲  "
                              : "▲  ▼ "}
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td {...cell.getCellProps()}>
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            {pageOptions.length > 1 ? (
              <div className="global-react-table-pagination">
                <div className="grtp-pg-count">
                  Page
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </div>
                <button
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  className="btn-pagination"
                >
                  {"<<"}
                </button>
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className="btn-pagination"
                >
                  {pageIndex}
                </button>
                <button className="btn-pagination">{pageIndex + 1}</button>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className="btn-pagination"
                >
                  {pageIndex + 2}
                </button>
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                  className="btn-pagination"
                >
                  {">>"}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RoomType;
