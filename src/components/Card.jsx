// eslint-disable-next-line react/prop-types
function Card({ name, resin, nicotine, imageImg, description }) {
  return (
    <div className="flex flex-col pt-2 rounded-lg bg-white w-[120px] h-full sm:w-[200px] ] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="h-[150px] flex justify-center items-center">
        <img
          className="imgGradient w-[100px] h-[90px] md:w-[150px] md:h-[140px]"
          src={imageImg}
          alt=""
        />
      </div>
      <div className="p-4  ">
        <h5 className="sm:mb-2 text-sm sm:text-xl break-words font-medium leading-tight text-neutral-800 dark:text-neutral-50 ">
          {name}
        </h5>
        {resin & (resin !== 0) ? (
          <p className="mb-4 text-[10px] md:text-xs text-neutral-600 dark:text-neutral-200">
            Смола — {resin} мг/сиг; Никотин — {nicotine} мг/сиг;
          </p>
        ) : (
          <p className="mb-4 text-[10px] md:text-sm text-neutral-600 dark:text-neutral-200">
            {description}
          </p>
        )}

        {/* <button className="relative py-2.5 px-7 mt-6 text-black no-underline 
    bg-[#ffce00] rounded-[30px] tracking-[1px] transition duration-500 ">Отложить</button> */}
      </div>
    </div>
  );
}

export default Card;
