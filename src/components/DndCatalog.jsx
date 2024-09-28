import Circle from "../assets/Circle";

import { useSelector, useDispatch } from "react-redux";
// import  { useState } from "react";

import { TESelect } from "tw-elements-react";
import Card from "./Card";
import PaginationItem from "./PaginationItem";
import { useRef, useState, useEffect } from "react";
import { setCurrentPage } from "../redux/slices/cigarettesSlice";
import { setBrand, setCountry } from "../redux/slices/filterSlice";

const Accordion = () => {
  const dispatch = useDispatch();
  const { items, currentPage } = useSelector((state) => state.cigarettes);
  const { brand, country } = useSelector((state) => state.filter);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const itemsRef = useRef(null);

  const [paginationArray, setPaginationArray] = useState([]);
  useEffect(() => {
    setItemsPerPage(Math.floor((itemsRef.current.offsetWidth - 28) / 216) * 2);

    setPaginationArray([
      ...Array(
        Math.ceil(
          items.filter(
            (obj) =>
              (country === obj.country || country === "") &
              (brand === obj.brand || brand === "")
          ).length /
            Math.floor((itemsRef.current.offsetWidth - 28) / 216) /
            2
        )
      ),
    ]);
  }, [brand, country]);
  const countryArray = [
    { text: "Любая", value: "" },
    { text: "Россия", value: "Russia" },
    { text: "Германия", value: "Germany" },
    { text: "Армения", value: "Armenia" },
    { text: "Корея", value: "Korea" },
  ];
  const brandArray = [
    { text: "Любой", value: "" },
    { text: "K&G(Esse, Bohem)", value: "kg" },
    { text: "Филлип Моррис (Marlboro, Parliament,Next)", value: "pmi" },
    { text: "BAT (Ява, Kent, Rothmans)", value: "bat" },
    { text: "JTI (Wingston, Camel,LD)", value: "jti" },
    { text: "VonEiken (Chapman, Pepe,Harvest)", value: "VonEiken" },
    { text: "Grand Tobacco (Vip,Triumph,Ararat)", value: "gt" },
    { text: "Cigaronne", value: "cigaronne" },
  ];

  return (
    <div className="flex justify-center">
      <div
        className="relative w-full lg:h-[2000px] bg-[#191d21] rounded-[20px] overflow-hidden
     before:transform before:skew-y-[345deg] before:transition-[0.5s]
     card hover:before:top-[-70%] hover:before:transform hover:before:skew-y-[390deg] p-6"
      >
        <div className="flex absolute p-6  ml-60 flex-col w-[calc(100%-12em)] h-full">
          {/* группировка товаров */}
          <div className="flex w-full justify-start flex-wrap">
            <div className="flex ">
              <div className="relative  w-[200px]  pr-6 pb-2">
                <TESelect
                  data={countryArray}
                  label="Страна"
                  onOptionSelect={(obj) => dispatch(setCountry(obj.value))}
                />
              </div>
            </div>
            <div className="flex justify-end pr-6 pb-2">
              <div className="relative  w-[400px] ">
                <TESelect
                  visibleOptions={8}
                  data={brandArray}
                  label="Бренд"
                  onOptionSelect={(obj) => {
                    dispatch(setBrand(obj.value));
                    console.log(obj.value);
                  }}
                />
              </div>
            </div>

            <div className="relative">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch pb-2">
                <input
                  type="search"
                  className="relative w-50 m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Поиск"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

                {/* <!--Search icon--> */}
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          {/* блок с товарами */}
          <div
            className="w-full pt-[20px] grid grid-cols-[repeat(auto-fill,_200px)] gap-4  "
            ref={itemsRef}
          >
            {items
              .filter(
                (obj) =>
                  (country === obj.country || country === "") &
                  (brand === obj.brand || brand === "")
              )

              .map((obj, index) => <Card {...obj} key={index} />)

              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )}
          </div>
          {/* это для перелистывания (пагинация) */}
          <nav aria-label="Page navigation example" className="pt-20">
            <ul className="list-style-none flex">
              <PaginationItem
                onClickPage={() => {
                  if (currentPage > 1) {
                    dispatch(setCurrentPage(currentPage - 1));
                  }
                }}
                value={<span aria-hidden="true">&laquo;</span>}
              />
              {[...Array(3)].map((obj, index) => (
                <PaginationItem
                  onClickPage={() => {
                    dispatch(setCurrentPage(index + 1));
                  }}
                  key={index}
                  value={index + 1}
                />
              ))}
              {currentPage > 4 && (
                <PaginationItem onClickPage={() => {}} value={"..."} />
              )}
              {currentPage > 3 && (
                <PaginationItem onClickPage={() => {}} value={currentPage} />
              )}
              {currentPage < paginationArray.length && (
                <PaginationItem onClickPage={() => {}} value={"..."} />
              )}
              {currentPage < paginationArray.length && (
                <PaginationItem
                  onClickPage={() => {
                    dispatch(setCurrentPage(paginationArray.length));
                  }}
                  value={paginationArray.length}
                />
              )}
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

        <div className="flex flex-col mt-3 w-48  text-gray-400  rounded">
          <p className="flex items-center w-full px-6 mt-3">
            <Circle />
            <span className="ml-2 text-sm font-bold">Каталог</span>
          </p>

          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
              <p className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                <span className="ml-2 text-sm font-medium">
                  Кальяны, табак, аксессуары
                </span>
              </p>
              <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700"></div>
              <p className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                <span className="ml-2 text-sm font-medium">Самокрутки</span>
              </p>
              <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700"></div>
              <p className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                <span className="ml-2 text-sm font-medium">
                  Системы нагревания табака
                </span>
              </p>
              <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700"></div>
              <p className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                <span className="ml-2 text-sm font-medium">
                  Сигары и сигариллы
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
              <p className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                <span className="ml-2 text-sm font-medium">
                  Сигареты папиросы
                </span>
              </p>
            </div>
          </div>
          {/* <p className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" >
			
			<span className="ml-2 text-sm font-medium">Account</span>
		</p> */}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
