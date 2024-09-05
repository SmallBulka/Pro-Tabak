import  Circle  from "../assets/Circle";
// import  { useState } from "react";

const Accordion = () => {
    // const [dropdownState, setDropdownState] = useState({ open: false });
    // const handleDropdownClick = () =>
    //     setDropdownState({ open: !dropdownState.open });
  return (
    
<div className="relative xl:w-[1110px] lg:h-[400px] bg-[#191d21] rounded-[20px] overflow-hidden
     before:transform before:skew-y-[345deg] before:transition-[0.5s]
     card hover:before:top-[-70%] hover:before:transform hover:before:skew-y-[390deg] p-6">





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
  );
};

export default Accordion;