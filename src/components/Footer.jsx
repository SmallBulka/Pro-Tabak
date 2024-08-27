import Whatsapp from "../assets/Whatsapp";

function Footer() {
  return (
    <footer className=" mt-[80px] xl:mt-[100px]  relative z-20 bg-[#191d21] p-8 ">
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[15px]">
          <div
            className=" w-full max-w-[400px] mx-auto mb-8 
          text-center xl:text-left "
          >
            <a className="flex justify-center xl:justify-start mb-8" href="">
              <div className=" text-4xl  text-slate-100 font-rubik ">
                Pro_Табак
              </div>
            </a>
            <p className="mb-8 text-xl text-[#fffa]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque
            </p>
            <ul className="text-pretty flex gap-[54px] justify-center xl:justify-start">
              <li className="flex gap-3 items-center">
                <a href="tel:+79044903470">
                  <Whatsapp />
                </a>
                <a href="tel:+79044903470" className="text-[#fffa]">
                  +7 (904) 490 34 70
                </a>
              </li>
            </ul>
          </div>

          <div className="max-w-[260px] mx-auto xl:mx-0 text-[#fffa]">
            <p className="mb-3">Адреса магазинов</p>
            <div className="mb-3 flex flex-col gap-5 ">
              <a
                href="https://yandex.ru/maps/-/CDs0yJ~T"
                className=" text-[#ffce00]"
              >
                ​Ул. Федюнинского, 55
              </a>
              <a
                href="https://yandex.ru/maps/-/CDs0yZPM"
                className=" text-[#ffce00]"
              >
                ​Ул. Герцена, 95
              </a>
              <a href="#" className=" text-[#ffce00]">
                Задать вопрос
              </a>
              <a href="#" className="text-[#ffce00]">
                Заказать звонок
              </a>
              <a href="#" className="text-[#ffce00]">
                Запросить оптовый прайс
              </a>
            </div>
          </div>
          <div className="flex items-center m-auto">
            <div className="flex lg:h-[90px] lg:w-[310px]  bg-white border-8 border-black">
              <p className="text-balance text-center font-bold p-1">
                МИНЗДРАВ ПРЕДУПРЕЖДАЕТ: КУРЕНИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ!
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </footer>
  );
}

export default Footer;
