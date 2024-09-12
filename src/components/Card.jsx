function Card(props) {
  return (
    <section>
      <div
        className="relative w-[380px] h-[250px] bg-black
   "
      >
        <div
          className="relative w-full flex justify-between items-center pt-5 z-10
   "
        >
          {/* <div className="bottom-0 left-0 font-semibold text-6xl text-black opacity-10"></div> */}
          <div className="">
          <h2>название</h2>
          <p>fbfb</p>
          </div>
          <img
            src='./img/4.png'
            alt="mouse corsair"
            className="h-[200px] w-auto"
          />
        </div>

        <div
          className="relative  flex justify-center items-center flex-col z-20
  "

        >
          <h3 className="text-white text-xl font-medium tracking-wide text-center ">
            {props.title}
          </h3>

          
          <p
            
            className="relative py-2.5 px-7 mt-6 text-black no-underline 
    bg-[#ffce00] rounded-[30px] uppercase tracking-[1px] transition duration-500 "
          >
            Где купить?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
