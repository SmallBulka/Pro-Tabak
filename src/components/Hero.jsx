import ArrowIcon from "../assets/ArrowIcon"


function Hero() {
  
  return (
    // pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]
        <section className="hero h-[840px] xl:h-[760px] bg-auto bg-hero  lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
            <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
                <div className="text-white w-[567px] flex flex-col items-center text-center
                xl:text-left lg:items-start">
                <h1 className="text-[64px] fg:text-[84px] leading-none mb-8">Изысканность и качество в каждой затяжке</h1>
                <p className="mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, enim.</p>
                <div className="flex gap-1 items-centermt ">
                <button className="btn btn-primary mx-auto xl:mx-0">Перейти в каталог</button>
                <button className="btn btn-text gap-2 "><span>Где купить</span><ArrowIcon /></button>
                </div>
                
                
                </div>
            </div>
            
        </section>
    
  )
}

export default Hero