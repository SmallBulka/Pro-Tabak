import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Catalog from './components/Catalog';
import Card from './components/Card';
import Shopping from './assets/Shopping';
import Handshake from './assets/Handshake';
import Warranty from './assets/Warranty';
import Footer from './components/Footer';
import Maps from './components/Maps';
import Form from './components/Form';
// import Popup from './components/Popup';



function App() {

  


  return (
    
  <>
  
  <Header/>
  <Hero/>
  <LogoTicker/>
  
  {/* <Popup/> */}

  <div className="container mx-auto px-5 py-2   md:justify-center">
  <hr className='br m-auto '></hr>
  <h2 className='h2 p-5  flex justify-center'>Каталог</h2>
  
  <div className="m-1 flex flex-wrap md:-m-2 ">

  <div className="flex  mr-8 flex-wrap">
      <div className="w-full p-[20px] md:p-p-10 ">
      <Card title="Сигареты" imageImg="../img/cigaronne.webp"/>
      </div>
    </div>
    
    <div className="flex xl:w-1/3 flex-wrap ">
      <div className="w-full p-[20px] md:p-p-10 ">
      <Catalog title="Электронные сигареты" imageImg="../img/34194.970.png"/>
      </div>
    </div>
    
    <div className="flex xl:w-1/3 flex-wrap ">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog title="Самокрутоки и трубки" imageImg="../img/middle.png"/>
      </div>
    </div>
    <div className="flex xl:w-1/3 flex-wrap ">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog  title=" Стики" imageImg="../img/iqos.png"/>
      </div>
    </div>
    <div className="flex xl:w-1/3 flex-wrap">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog title="Всё для кальянов" imageImg="../img/fona.png"/>
      </div>
    </div>
    {/* <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-[40px] md:p-p-10">
      <Catalog title="Папиросы" imageImg="../img/scale_1200.png"/>
      </div>
    </div> */}
    <div className="flex xl:w-1/3 flex-wrap">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog title="Сувенирная продукция" imageImg="../img/4.png"/>
      </div>
    </div>
    <div className="flex xl:w-1/2 flex-wrap">
      <div className="w-full p-[20px] md:p-5">
      <Card title="Папиросы" imageImg="../img/scale_1200.png"/>
      </div>
    </div>

</div>
  </div>
<div className='steps mt-[80px] xl:mt-[60px] relative z-20'>
  
  <div className='container mx-auto'>
  <hr className='br m-auto'></hr>
  <h2 className='h2 p-10  flex justify-center'>Преимущества компании</h2>
  
    <div className='grid grid-cols-1 gap-12 xl:grid-cols-3 text-[#fffa] p-5 pb-20'>
      
      <div className='steps__step text-center '>
        <div className='mb-4 flex justify-center'>
        <Shopping/>
        </div>
        <h3 className='h3 mb-5 '>Широкий ассортимент</h3>
        <p className='mb-5 max-w-md mx-auto'>
        Мы предлагаем разнообразие товаров, чтобы удовлетворить разные потребности клиентов. </p>
      </div>
      <div className='steps__step text-center '>
        <div className='mb-4 flex justify-center'>
        <Handshake/>
        </div>
        <h3 className='h3 mb-5'>Официальные дистрибьюторы</h3>
        <p className='mb-5 max-w-md mx-auto'>
        Мы сотрудничаем только с надежными поставщиками, гарантируя качество продукции. </p>
      </div>
      <div className='steps__step text-center '>
        <div className='mb-4 flex justify-center'>
        <Warranty/>
        </div>
        <h3 className='h3 mb-5'>Гарантия качества</h3>
        <p className='mb-5 max-w-md mx-auto'>
        Мы работаем в удобное для вас время, гарантируя доступность нашей продукции. </p>
      </div>
    </div>
  </div>
</div>








  <Maps/>
  <Form/>
<Footer/>
  </>
  );
  

}


export default App;
