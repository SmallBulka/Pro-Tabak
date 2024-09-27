import Circle from "../assets/Circle";

import { useSelector } from "react-redux";
// import  { useState } from "react";

import { TESelect } from "tw-elements-react";
import Card from "./Card";

const Accordion = () => {
  const { items } = useSelector((state) => state.cigarettes);
  const data = [
    { text: "Любая" },
    { text: "Россия", value: 1 },
    { text: "Германия", value: 2 },
    { text: "Армения", value: 3 },
    { text: "Корея", value: 4 },
  ];
  const brand = [
    { text: "Любой", value: 0 },
    { text: "пач1", value: 1 },
    { text: "мальборо", value: 2 },
    { text: "ротманс", value: 3 },
    { text: "ява", value: 4 },
  ];

  return (
    <div className="flex justify-center">
      <div
        className="relative xl:w-[1500px] lg:h-[2000px] bg-[#191d21] rounded-[20px] overflow-hidden
     before:transform before:skew-y-[345deg] before:transition-[0.5s]
     card hover:before:top-[-70%] hover:before:transform hover:before:skew-y-[390deg] p-6"
      >
        <div className="flex absolute p-6  ml-60 flex-row w-[calc(100%-12em)]">
          <div className="flex absolute   w-full justify-start">
            <div className="flex ">
              <div className="relative  w-40  pr-6">
                <TESelect data={data} label="Страна" />
              </div>
            </div>
            <div className="flex justify-end pr-6">
              <div className="relative  w-40 ">
                <TESelect data={brand} label="Бренд" />
              </div>
            </div>

            <div className="relative   ">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
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

          <div className="w-full pt-[70px] grid grid-cols-[repeat(auto-fill,_200px)] gap-4 h-56  ">
            {/* {cigarettes.peppell.map((obj,index)=>(<Card {...obj} />))} */}
            {/* {cigarettes.jti.map((obj,index)=>(<Card {...obj} />))} */}

            {items
              .map((obj, index) => <Card {...obj} key={index} />)
              .slice(0, 10)}

            {/* это для перелистывания (пагинация) */}
            <nav aria-label="Page navigation example">
              <ul className="list-style-none flex">
                <li>
                  <p
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </p>
                </li>
                <li>
                  <p className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer">
                    1
                  </p>
                </li>
                <li aria-current="page">
                  <p className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer">
                    2
                  </p>
                </li>
                <li>
                  <p className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer">
                    3
                  </p>
                </li>
                <li>
                  <p
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </p>
                </li>
              </ul>
            </nav>
          </div>
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
