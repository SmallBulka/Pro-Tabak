// import React from 'react'

// eslint-disable-next-line react/prop-types
function Popup({ clickConfirmAge }) {
  return (
    <div className="flex m-auto justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="relative  lg:w-[710px] h-[710px] lg:h-[480px] bg-[#191919] rounded-[20px] p-10">
        <div>
          <h2 className="text-[#ffce00] flex justify-center font-semibold">
            ВНИМАНИЕ!
          </h2>
          <div className="text-white text-sm pb-5">
            <p className="pb-5">
              Данный Сайт не является рекламой, так как предназначен для
              ограниченного круга лиц, а именно для совершеннолетних
              потребителей табачной продукции (граждан России старше 18 лет) для
              предоставления им достоверной информации об основных
              потребительских свойствах и качественных характеристик табачной
              продукции и аксессуарах для курения (п.1 и п.2 ст.10 Закона «О
              защите прав Потребителя»). Лицам, не достигшим совершеннолетия,
              пользование Сайтом запрещено. (ст. 20 ФЗ №15 «Об охране здоровья
              граждан..»)
            </p>
            <hr className="br m-auto"></hr>
            <p className="pt-5">
              При переходе на сайт, я подтверждаю, что мне уже исполнилось 18
              лет, я являюсь потребителем табака или иной никотинсодержащей
              продукции и даю согласие на обработку персональных данных
            </p>
          </div>
          <p className="text-[#ffce00] flex justify-center">
            Вам больше 18 лет?
          </p>
          <div className="flex gap-1 items-centermt justify-center p-5">
            <button
              className="h-[60px] px-[30px]  bg-transparent text-white rounded-[18px]"
              onClick={() => {
                window.location.replace("https://google.ru");
              }}
            >
              Нет,мне нет 18 лет
            </button>
            <button
              className="lg:h-[60px] px-[30px] bg-white text-black rounded-[18px]"
              onClick={() => {
                clickConfirmAge();
              }}
            >
              Да,мне есть 18 лет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
