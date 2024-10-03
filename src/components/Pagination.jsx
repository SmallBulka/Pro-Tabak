import { useEffect } from "react";
import { setCurrentPage } from "../redux/slices/paginationSlice";
import PaginationItem from "./PaginationItem";
import {
  setItemsPerPage,
  setPaginationArray,
} from "../redux/slices/paginationSlice";
import { useDispatch, useSelector } from "react-redux";
const Pagination = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const { brand, country, searchValue, catalog } = useSelector(
    (state) => state.filter
  );
  const { currentPage, paginationArray, itemsWidth, itemsPerPage } =
    useSelector((state) => state.paginationSlice);
  const itemsLenght = items[catalog].filter(
    (obj) =>
      (country === obj.country || country === "") &
      (obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        searchValue === "") &
      (brand === obj.brand || brand === "")
  ).length;
  useEffect(() => {
    dispatch(setItemsPerPage(Math.floor((itemsWidth - 28) / 216) * 2));
    dispatch(
      setPaginationArray([
        ...Array(
          Math.ceil(itemsLenght / Math.floor((itemsWidth - 28) / 216) / 2)
        ),
      ])
    );
  }, [brand, country, searchValue, itemsWidth]);
  return (
    <div className={itemsLenght < itemsPerPage ? "invisible" : "pt-10 "}>
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex ">
          <PaginationItem
            onClickPage={() => {
              if (currentPage > 1) {
                dispatch(setCurrentPage(currentPage - 1));
              }
            }}
            value={<span aria-hidden="true">&laquo;</span>}
          />
          <PaginationItem
            onClickPage={() => {
              dispatch(setCurrentPage(1));
            }}
            key={1}
            value={1}
          />
          {itemsLenght / itemsPerPage > 2 && (
            <PaginationItem
              onClickPage={() => {
                dispatch(setCurrentPage(2));
              }}
              value={2}
            />
          )}
          {itemsLenght / itemsPerPage > 3 && (
            <PaginationItem
              onClickPage={() => {
                dispatch(setCurrentPage(3));
              }}
              value={3}
            />
          )}
          {currentPage > 4 && (
            <PaginationItem onClickPage={() => {}} value={"..."} />
          )}
          {(currentPage > 3) & (currentPage < itemsLenght / itemsPerPage) ? (
            <PaginationItem onClickPage={() => {}} value={currentPage} />
          ) : (
            ""
          )}
          {currentPage < paginationArray.length - 1 && (
            <PaginationItem onClickPage={() => {}} value={"..."} />
          )}

          <PaginationItem
            onClickPage={() => {
              dispatch(setCurrentPage(paginationArray.length));
            }}
            value={paginationArray.length}
          />

          <PaginationItem
            onClickPage={() => {
              if (currentPage < paginationArray.length) {
                dispatch(setCurrentPage(currentPage + 1));
              }
            }}
            value={<span aria-hidden="true">&raquo;</span>}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
