function Form() {
  return (
    <div className=" mt-[80px] xl:mt-[100px]  relative z-20  xl:flex justify-center ">
      <div
        className="relative xl:w-[1110px]  bg-[#191d21] rounded-[20px] overflow-hidden
     before:transform before:skew-y-[345deg] before:transition-[0.5s]
     card hover:before:top-[-70%] hover:before:transform hover:before:skew-y-[390deg] p-6
    "
      >
        <h2 className="h2 text-center pt-6">Связаться с нами</h2>
        <p className="text-center text-white">
          Свяжитесь с нами, будем рады помочь вам по любым вопросам.
        </p>

        <div>
          {/* <form className="lg:flex md:flex-wrap md:justify-center pt-10 items-center ">
            <div className="mb-6">
              <label className="text-white p-4" htmlFor="name">
                Имя
              </label>
              <input
                className="rounded-[20px] bg-[#2D343C] md:w-[300px] h-[40px]"
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div className="mb-6">
              <label className="text-white p-4" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-[20px] bg-[#2D343C] md:w-[300px] h-[40px]"
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div className="mb-6 md:pr-11 md:flex md:items-center ">
              <label className="text-white p-4" htmlFor="message">
                Сообщение
              </label>
              <textarea
                className="rounded-[20px] bg-[#2D343C] md:w-[400px] h-[50px] lg:h-[80px]"
                id="message"
                name="message"
              />
            </div>

            <button
              className="btn-primary mx-auto xl:mx-0 h-[50px] px-[40px] rounded-[18px] mb-5"
              type="submit"
            >
              Отправить сообщение
            </button>
          </form> */}
        </div>
        <hr className="mt-3"></hr>
        <div className="flex justify-around pt-7 text-white h3 flex-wrap ">
          <a href="tel:+71112223344">
            <div className=" flex flex-wrap items-center flex-col p-4 m-2 border-[1px] border-[#494949] rounded-xl ">
              <p className="select-none text-center">Тел. рынок "Центральный"</p>
              <p>+7 (999) 123 45 67</p>
            </div>
          </a>
          <a href="tel:+71112223344">
            <div className=" flex flex-wrap items-center flex-col p-4 m-2 border-[1px] border-[#494949] rounded-xl ">
              <p className="select-none text-center">Тел. рынок "Михайловский"</p>
              <p>+7 (999) 123 45 67</p>
            </div>
          </a>

          <a href="mailto:tabakbazar@mail.ru">
            <div className=" flex flex-wrap items-center flex-col p-4 m-2 border-[1px] border-[#494949] rounded-xl ">
              <p className="select-none ">Почта для связи:</p>
              <p className="font-raleway">tabakbazar@mail.ru</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
