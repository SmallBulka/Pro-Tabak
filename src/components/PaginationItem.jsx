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
            ? " bg-neutral-100 dark:bg-neutral-500 transition-all duration-300 rounded  "
            : ""
        }
      >
        <p className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-300 transition-all duration-300  dark:text-white  cursor-pointer">
          {value}
        </p>
      </li>
    </>
  );
};

export default PaginationItem;
