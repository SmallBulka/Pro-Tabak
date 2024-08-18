
function Card(props) {
  return (
    <section >
    <div className="relative w-[710px] h-[480px] bg-[#191919] rounded-[20px] overflow-hidden
    before:content-[''] before:absolute before:top-[-50%] before:w-full before:h-full before:bg-[#fffa] 
   before:transform before:skew-y-[345deg] before:transition-[0.5s]
   card hover:before:top-[-70%] hover:before:transform hover:before:skew-y-[390deg]
   ">
  <div className="relative w-full flex justify-center items-center pt-5 z-10
   ">
    {/* <div className="bottom-0 left-0 font-semibold text-6xl text-black opacity-10"></div> */}
    <img src={props.imageImg} alt="mouse corsair" className="h-[300px] w-auto"/>
  </div>
  
  <div className="relative p-5 flex justify-center items-center flex-col z-20
  ">
    <h3 className="text-white text-xl font-medium tracking-wide text-center">{props.title}</h3>
   
    <div className="relative container">
        <span className="absolute  text-[7em] font-extrabold italic text-white/10">Pro-Tabak</span> 
</div>
    <a href="#" className="relative py-2.5 px-7 mt-6 text-black no-underline 
    bg-[#ffce00] rounded-[30px] uppercase tracking-[1px] transition duration-500 ">Где купить?</a>
  </div>

</div>

</section>

  )
}

export default Card


