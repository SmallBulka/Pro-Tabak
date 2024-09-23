// eslint-disable-next-line react/prop-types
function Card({ name, resin, nicotine, imageImg }) {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img className="imgGradient" src={imageImg} alt="" />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
          Смола — {resin} мг/сиг; Никотин — {nicotine} мг/сиг;
        </p>
        {/* <button className="relative py-2.5 px-7 mt-6 text-black no-underline 
    bg-[#ffce00] rounded-[30px] tracking-[1px] transition duration-500 ">Отложить</button> */}
      </div>
    </div>
  );
}

export default Card;
