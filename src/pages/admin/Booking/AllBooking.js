import React, { Fragment, useMemo, useEffect } from "react";
import "./reacttable.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { FaEdit } from "react-icons/fa";
import { AiFillMail, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

// external imports for the table
import GlobalFilter from "../utils/GloableFilter";

import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

// importing temporary data
import datas from "./temp/tempData";

const AllBooking = () => {
  // setting button click event listener
  useEffect(() => {
    const moreBtn = document.querySelectorAll(".admin-action-bookings-button");
    moreBtn.forEach((i) =>
      i.addEventListener("click", function addmore(e) {
        if (this.classList.contains("open")) {
          this.classList.remove("open");
        } else {
          moreBtn.forEach((item) => item.classList.remove("open"));
          this.classList.add("open");
        }
      })
    );
  }, []);

  const data = useMemo(() => [...datas], [datas]);
  const columns = useMemo(
    () =>
      datas[0]
        ? Object.keys(datas[0]).map((key) => {
            // modifiying the fields
            if (key === "user") {
              return {
                Header: "Cutomer",
                accessor: key,
                Cell: ({ value }) => (
                  <>
                    <div className="bt-user">
                      <div className="btu-profile-img">{value.pic}</div>
                      <div className="btu-info">
                        <div className="btu-name">
                          {value.firstName} {value.lastName}
                        </div>
                        <div className="btu-email">
                          <small>{value.email}</small>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              };
            }

            if (key === "Booking") {
              return {
                Header: key,
                accessor: key,
                Cell: ({ value }) => (
                  <>
                    {value === "open" ? (
                      <span style={{ color: "var(--dark-mint)" }}>{value}</span>
                    ) : (
                      <span style={{ color: "var(--golden)" }}>{value}</span>
                    )}
                  </>
                ),
              };
            }

            if (key === "payment") {
              return {
                Header: "Payment",
                accessor: key,
                Cell: ({ value }) => (
                  <>
                    {value === "paid" ? (
                      <span style={{ color: "var(--dark-mint)" }}>{value}</span>
                    ) : (
                      <span style={{ color: "var(--golden)" }}>{value}</span>
                    )}
                  </>
                ),
              };
            }

            if (key === "v")
              return {
                Header: "Actions",
                accessor: key,
                Cell: ({ value }) => (
                  <>
                    <span className="admin-action-bookings-button">
                      <IconButton id="icons-button">
                        <MoreHoriz />
                      </IconButton>
                      <div className="admin-action-bookings">
                        <Link to={"/send/mail"}>
                          <span className="aabOptionButton">
                            <AiFillMail />
                            send mail
                          </span>
                        </Link>
                        <Link to={`/edit/booking/${value}`}>
                          <span className="aabOptionButton">
                            <FaEdit />
                            Edit
                          </span>
                        </Link>
                        <span className="aabOptionButton">
                          <AiFillDelete />
                          Delete
                        </span>
                      </div>
                    </span>
                  </>
                ),
              };
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
              <h2>All Bookings</h2>
              <div className="adminViewHeaderLinks">
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  setGlobalFilter={setGlobalFilter}
                  globalFilter={state.globalFilter}
                />
                <Link to="/booking/new/add">
                  <div className="btn-primary addNew">
                    <AiOutlinePlus />
                  </div>
                </Link>
              </div>
            </div>

            <div className="global-table-container">
              {datas && (
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
              )}
              <div className="global-react-table-footer">
                {pageOptions.length > 1 ? (
                  <div className="global-react-table-pagination">
                    <button
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                      className="btn-pagination"
                    >
                      {"prev"}
                    </button>
                    <button
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                      className="btn-pagination"
                    >
                      {"1"}
                    </button>
                    <button className="btn-pagination">
                      <BsThreeDots />
                    </button>
                    <button
                      onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}
                      className="btn-pagination"
                    >
                      {pageCount - 1}
                    </button>
                    <button
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                      className="btn-pagination"
                    >
                      {"next"}
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="how-Much-show-On-Page">
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                  >
                    {[5, 10, 25, 50, 100].map((element) => (
                      <option key={element} value={element}>
                        show {element}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AllBooking;
