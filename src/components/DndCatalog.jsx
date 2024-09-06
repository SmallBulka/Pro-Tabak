import  Circle  from "../assets/Circle";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";
// import  { useState } from "react";
import { TESelect } from "tw-elements-react";
const Accordion = () => {
    const data = [
        { text: "Россия", value: 1 },
        { text: "Германия", value: 2 },
        { text: "Армения", value: 3 },
        { text: "Корея", value: 4 },
      ];
      const brand = [
        { text: "Россия", value: 1 },
        { text: "Германия", value: 2 },
        { text: "Армения", value: 3 },
        { text: "Корея", value: 4 },
      ];

  return (

   <div className="flex justify-center">
    
<div className="relative xl:w-[1110px] lg:h-[800px] bg-[#191d21] rounded-[20px] overflow-hidden
     before:transform before:skew-y-[345deg] before:transition-[0.5s]
     card hover:before:top-[-70%] hover:before:transform hover:before:skew-y-[390deg] p-6">

<div className="flex justify-end">
      <div className="relative mb-3 w-60 pt-5">
        <TESelect data={data} multiple label="Страна" />
      </div>
    </div>
    <div className="flex justify-end">
      <div className="relative mb-3 w-60 pt-5">
        <TESelect data={brand} multiple label="Бренд" />
      </div>
    </div>






<div
  className="relative flex "
  data-twe-input-wrapper-init
  data-twe-input-group-ref>
  <input
    type="search"
    className="peer block min-h-[auto] w-40 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    placeholder="Search"
    aria-label="Search"
    id="exampleFormControlInput"
    aria-describedby="basic-addon1" />
  <label
    
    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
    >Поиск
  </label>
  <button
    className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
    id="button-addon1"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    <span className="[&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
       
        stroke="currentColor">
        <path
          
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </span>
  </button>
</div>

{/* <button onClick={handleDropdownClick} id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Бренд</button>

{dropdownState.open && (
<div id="dropdownDefaultCheckbox" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <div className="flex items-center">
          <input id="checkbox-item-1"  type="checkbox" 
   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
        </div>
      </li>
      <li>
        <div className="flex items-center">
            <input  id="checkbox-item-2" type="checkbox"
  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
          </div>
      </li>
      <li>
        <div className="flex items-center">
          <input id="checkbox-item-3" type="checkbox" 
  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
        </div>
      </li>
    </ul>
</div>)} */}




    
    <div className="flex flex-col items-center w-48 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
		<a className="flex items-center w-full px-6 mt-3" href="#">
			<Circle/>
			<span className="ml-2 text-sm font-bold">Каталог</span>
		</a>
		<div className="w-full px-2">
			<div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
					
					<span className="ml-2 text-sm font-medium">Кальяны, табак, аксессуары</span>
				</a>
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
					
					<span className="ml-2 text-sm font-medium">Самокрутки</span>
				</a>
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
					
					<span className="ml-2 text-sm font-medium">Системы нагревания табака</span>
				</a>
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
					
					<span className="ml-2 text-sm font-medium">Сигары и сигариллы</span>
				</a>
			</div>
			<div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
					
					<span className="ml-2 text-sm font-medium">Сигареты папиросы</span>
				</a>
				{/* <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
					
					<span className="ml-2 text-sm font-medium">Settings</span>
				</a>
                <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
					
					<span className="ml-2 text-sm font-medium">Settings</span>
				</a> */}
				
			</div>
		</div>
		{/* <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
			
			<span className="ml-2 text-sm font-medium">Account</span>
		</a> */}
	</div>
    </div>
    </div> 
  );
};

export default Accordion;