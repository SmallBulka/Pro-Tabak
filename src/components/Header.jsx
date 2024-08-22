

// flex w-full h-0 p-0  overflow-hidden border-t top-[90px] lg:left-0 ring-0 flex-col gap-4 
//           lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300

function Header () {

  return (
    // <main className='max-w-[1920px] mx-auto bg-black overflow-hidden '>
    
    

      <header className="sticky top-0 h-[80px] z-30 backdrop-blur-sm  ">
        {/* <div className="flex justify-center items-center py-3">
          <div className="inline-flex gap-1 items-center">
            <p>vdrfv</p>
          </div>
        </div> */}
      
        <div className="container mx-auto flex justify-between h-full items-center ">
        <div className=' text-4xl  text-slate-100 font-rubik '>Pro_Табак</div>
        <nav className="xl:hidden">
        
          <ul className="flex items-center gap-[30px] ">
            <li>
              <a href="#" className="hoverEffects ">Каталог</a>
          </li>
            <li>
              <a href="#" className="hoverEffects">О компании</a>
          </li>
            {/* <li>
              <a href="#" className="hoverEffects">Новости</a>
          </li> */}
            <li>
              <a href="#" className=" hoverEffects">Контакты</a>
          </li>
          </ul>
          
        </nav>


        <button id="burger"  className="group  relative sm:block h-5 w-[30px] curcor-pointer lg:hidden">
          <span 
            className="absolute top-0 left-0 h-[1px] w-full bg-white 
            transition-transform group-[.active]:translate-y-2 group-[.active]:rotate-45"></span>
          <span 
            className="absolute top-1/2 left-0 h-[1px] w-full bg-white 
            transition-opacity group-[.active]:opacity-0 "></span>
          <span 
            className="absolute bottom-0 left-0 h-[1px] w-full bg-white 
            transition-transform group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45"></span>
        </button>
        <nav id='mobile-menu' 
        className='  fixed left-0 top-0 bottom-0  hidden items-center justify-center bg-heroGradient'>
          <ul className='flex flex-col items-center gap-10'>
            <li>
              <a href='#' className='text-xl text-white'>Каталог</a>
            </li>
            <li>
              <a href='#' className='text-xl text-white'>О компании</a>
            </li>
            <li>
              <a href='#' className='text-xl text-white'>Новости</a>
            </li>
            <li>
              <a href='#' className='text-xl text-white'>Контакты</a>
            </li>
          </ul>
        </nav>
        </div>
        
        
      </header>
      
    
     
  )
  
}


export default Header