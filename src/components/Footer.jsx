import Whatsapp from '../assets/Whatsapp';

function Footer() {
  return (
    <footer className='flex items-center mt-[80px] xl:mt-[150px] h-[300px] relative z-20 bg-[#191d21] '>
      <div className='container mx-auto px-0'>
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[15px]">
          <div className=" w-full max-w-[400px] mx-auto mb-8 
          text-center xl:text-left "
          >
          <a className="flex justify-center xl:justify-start mb-8" href="">
          <div className='h2'>Pro_Tabak</div></a>
          <p className="mb-8 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque</p>
          <ul className='text-pretty flex gap-[54px] justify-center xl:justify-start'>
            <li className='flex gap-3 items-center'>
              <a href=""><Whatsapp/></a>
              <p>+7 (919) 948 79 38</p>
            </li>
          </ul>
          </div>
          
          
          <div className='max-w-[260px] mx-auto xl:mx-0 '>
            <h3 className='mb-3'>Контакты</h3>
            <div className='mb-3 flex flex-col gap-5 '>
              <p>+7 (919) 948 79 38</p>
              <a href="#" className=" text-[#ffce00]">Задать вопрос</a>
              <a href="#" className="text-[#ffce00]">Заказать звонок</a>
              <a href="#" className="text-[#ffce00]">Запросить оптовый прайс</a>
            </div>
          </div>
          <div className='flex items-center '>
          <div className="flex h-[90px] w-[310px]  bg-white border-8 border-black">
            <p className='text-balance text-center font-bold p-1'>МИНЗДРАВ ПРЕДУПРЕЖДАЕТ:
            КУРЕНИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ!</p>

</div>
</div>
          </div>
        </div>
     
    </footer>
  )
}

export default Footer