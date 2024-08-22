

function Form() {
  return(
  <div className=' mt-[80px] xl:mt-[100px]  relative z-20  xl:flex justify-center '>
  <div className='relative xl:w-[1110px] lg:h-[400px] bg-[#191d21] rounded-[20px] overflow-hidden
     before:transform before:skew-y-[345deg] before:transition-[0.5s]
     card hover:before:top-[-70%] hover:before:transform hover:before:skew-y-[390deg] p-6
    '>
      <h2 className='h2 text-center pt-6'>Связаться с нами</h2>
      <p className='text-center text-white'>Свяжитесь с нами, будем рады помочь вам по любым вопросам.</p>
      
      <div>
          <form className='lg:flex md:flex-wrap md:justify-center pt-10 items-center '>
        <div className='mb-6 mr-[100px]'>
          <label className='text-white p-4' htmlFor="name">Имя</label>
          <input className='rounded-[20px] bg-[#2D343C] w-[300px] h-[40px]' type="text" id="name" name="name"  />
        </div>
  
        <div className='mb-6'>
          <label className='text-white p-4' htmlFor="email">Email</label>
          <input className='rounded-[20px] bg-[#2D343C] w-[300px] h-[40px]' type="email" id="email" name="email"  />
        </div>
  
        <div className='mb-6 pr-11 md:flex items-center'>
          <label className='text-white p-4' htmlFor="message">Сообщение</label>
          <textarea className='rounded-[20px] bg-[#2D343C] w-[400px] h-[80px]' id="message" name="message" />
        </div>
  
        <button className='btn-primary mx-auto xl:mx-0 h-[50px] px-[40px] rounded-[18px]' type="submit">Отправить сообщение</button>
      </form>
      
      </div>
      <hr></hr>
      <div className='md:flex justify-center gap-[150px] pt-7 text-white h3'>
      <p>+7 (919) 948 79 38</p>
      <p>dreamy27@yandex.ru</p>
      </div>
      </div>
  
  
  </div>
  )

}

export default Form;