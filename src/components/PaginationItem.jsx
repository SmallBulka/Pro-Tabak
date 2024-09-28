import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const PaginationItem = ({ onClickPage, value }) => {
  const { currentPage } = useSelector((state) => state.cigarettes);
  let pageValue = -1;
  if (!isNaN(value)) {
    pageValue = value;
  }
  return (
    <>
      <li
        onClick={onClickPage}
        className={
          pageValue === currentPage
            ? " bg-neutral-100 dark:bg-neutral-700 transition-all duration-300 rounded  "
            : ""
        }
      >
        <p className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300  dark:text-white  cursor-pointer">
          {value}
        </p>
      </li>
    </>
  );
};

export default PaginationItem;
