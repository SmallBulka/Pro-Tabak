import  Circle  from "../assets/Circle";

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
        { text: "пач1", value: 1 },
        { text: "мальборо", value: 2 },
        { text: "ротманс", value: 3 },
        { text: "ява", value: 4 },
      ];


  return (

   <div className="flex justify-center">
    
<div className="relative xl:w-[1110px] lg:h-[800px] bg-[#191d21] rounded-[20px] overflow-hidden
     before:transform before:skew-y-[345deg] before:transition-[0.5s]
     card hover:before:top-[-70%] hover:before:transform hover:before:skew-y-[390deg] p-6">
<div className="flex justify-end ">
<div className="flex justify-end ">
      <div className="relative mb-3 w-60 pt-5 ">
        <TESelect data={data} multiple label="Страна" />
      </div>
    </div> 
    <div className="flex justify-end">
      <div className="relative mb-3 w-60 pt-5">
        <TESelect data={brand} multiple label="Бренд" />
      </div>
    </div> 
    
    <div className="relative mb-3 w-60 pt-5">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Поиск"
                  aria-label="Search"
                  aria-describedby="button-addon2" />

              {/* <!--Search icon--> */}
              <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          </div>
      </div>
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