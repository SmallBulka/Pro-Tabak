import ArrowIcon from "../assets/ArrowIcon";

// eslint-disable-next-line react/prop-types
function Hero({ scrollToCatalog, scrollToMiniMap }) {
  const slogans = [
    "Качество, которому можно доверять",
    "Изысканность и качество в каждой затяжке",
    "Мы заботимся о каждом клиенте и предлагаем только лучшее",
    "Наилучший выбор сигарет в Тюмени",
  ];
  const randomNumber = Math.floor(Math.random() * slogans.length);
  return (
    // pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]
    <section className=" hero  h-[740px] xl:h-[760px] bg-auto bg-ovo lg:bg-hero  lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div
          className="text-white w-[567px] flex flex-col items-center text-center
                xl:text-left lg:items-start"
        >
          <h1 className="text-[40px] md:text-[64px]  leading-none mb-8 select-none">
            {slogans[randomNumber]}
          </h1>
          {/* <p className="mb-8">придумай сюда текст</p> */}
          <div className="md:flex gap-1 items-centermt ">
            <button
              className="btn btn-primary mx-auto xl:mx-0"
              onClick={() => scrollToCatalog()}
            >
              Перейти в каталог
            </button>
            <button className="btn btn-text gap-2">
              <span onClick={() => scrollToMiniMap()}>Где купить</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
