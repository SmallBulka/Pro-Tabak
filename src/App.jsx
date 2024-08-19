import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Catalog from './components/Catalog';
import Card from './components/Card';

import Footer from './components/Footer';
import Maps from './components/Maps';





function App() {




  return (
    
  <>
  
  <Header/>
  <Hero/>
  <LogoTicker/>
  
  

  <div className="container mx-auto px-5 py-2  lg:pt-12">
  <div className="-m-1 flex flex-wrap md:-m-2">

  <div className="flex  mr-8 flex-wrap ">
      <div className="w-full p-[20px] md:p-p-10">
      <Card title="Сигареты" imageImg="../img/cigaronne.webp"/>
      </div>
    </div>
    
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog title="Электронные сигареты" imageImg="../img/34194.970.png"/>
      </div>
    </div>
    
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog title="Самокрутоки и трубки" imageImg="../img/middle.png"/>
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog  title=" Стики" imageImg="../img/iqos.png"/>
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog title="Всё для кальянов" imageImg="../img/fona.png"/>
      </div>
    </div>
    {/* <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-[40px] md:p-p-10">
      <Catalog title="Папиросы" imageImg="../img/scale_1200.png"/>
      </div>
    </div> */}
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-[20px] md:p-p-10">
      <Catalog title="Сувенирная продукция" imageImg="../img/4.png"/>
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-[20px] md:p-5">
      <Card title="Папиросы" imageImg="../img/scale_1200.png"/>
      </div>
    </div>

</div>
  </div>
  <Maps/>
      
<Footer/>
  </>
  );
  

}


export default App;
