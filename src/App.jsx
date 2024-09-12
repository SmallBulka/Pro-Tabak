import "./App.css";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Catalog from "./components/Catalog";
import Card from "./components/Card";
import Shopping from "./assets/Shopping";
import Handshake from "./assets/Handshake";
import Warranty from "./assets/Warranty";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import Form from "./components/Form";
import Popup from "./components/Popup";
import React from "react";
import Accordion from "./components/DndCatalog";

function App() {
  const miniMap = React.useRef(null);
  const logoTicker = React.useRef(null);
  const contacts = React.useRef(null);
  const companyDescription = React.useRef(null);
  const [checkAge, setCheckAge] = React.useState(false);
  const clickConfirmAge = () => setCheckAge(true);
  const scrollToCatalog = () => {
    logoTicker.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMiniMap = () => {
    miniMap.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContacts = () => {
    contacts.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToDescription = () => {
    companyDescription.current.scrollIntoView({ behavior: "smooth" });
  };

  
  return (
    <>
      {!checkAge ? <Popup clickConfirmAge={clickConfirmAge} /> : ""}
      {checkAge ? (
        <>
          <Header
            scrollToCatalog={scrollToCatalog}
            scrollContacts={scrollToContacts}
            scrollToDescription={scrollToDescription}
          />
          <Hero
            scrollToCatalog={scrollToCatalog}
            scrollToMiniMap={scrollToMiniMap}
          />
          <LogoTicker />

          <div ref={logoTicker} className="container m-auto lg:px-5 py-2   ">
            <hr className="br m-auto "></hr>
            <h2 className="h2 p-5  flex justify-center">Каталог</h2>

            <div className=" flex flex-wrap md:-m-2 justify-evenly md:justify-center">
              <div className="flex xl:w-1/3 flex-wrap ">
                <div className="w-full p-[20px] md:p-p-10">
                  <Catalog
                    title="Сигареты"
                    imageImg="./img/cigaronne.webp"
                    scrollToMiniMap={scrollToMiniMap}
                  />
                </div>
              </div>

              <div className="flex xl:w-1/3 flex-wrap ">
                <div className="w-full p-[20px] md:p-p-10">
                  <Catalog
                    title="Самокрутоки и трубки"
                    imageImg="./img/middle.png"
                    scrollToMiniMap={scrollToMiniMap}
                  />
                </div>
              </div>
              <div className="flex xl:w-1/3 flex-wrap ">
                <div className="w-full p-[20px] md:p-p-10">
                  <Catalog
                    title=" Стики"
                    imageImg="./img/iqos.png"
                    scrollToMiniMap={scrollToMiniMap}
                  />
                </div>
              </div>
              <div className="flex xl:w-1/3 flex-wrap">
                <div className="w-full p-[20px] md:p-p-10">
                  <Catalog
                    title="Всё для кальянов"
                    imageImg="./img/fona.png"
                    scrollToMiniMap={scrollToMiniMap}
                  />
                </div>
              </div>
              
              <div className="flex xl:w-1/3 flex-wrap">
                <div className="w-full p-[20px] md:p-p-10">
                  <Catalog
                    title="Сувенирная продукция"
                    imageImg="./img/4.png"
                    scrollToMiniMap={scrollToMiniMap}
                  />
                </div>
              </div>
              <div className="flex xl:w-1/3 flex-wrap">
                <div className="w-full p-[20px] md:p-p-10">
                  <Catalog
                    title="Папиросы"
                    imageImg="./img/scale_1200.png"
                    scrollToMiniMap={scrollToMiniMap}
                  />
                </div>
              </div>
            </div>
          </div>
          <Accordion/>
          <Card/>
          <div
            ref={companyDescription}
            className="steps mt-[80px] xl:mt-[60px] relative z-20"
          >
            <div className="container mx-auto">
              <hr className="br m-auto"></hr>
              <h2 className="h2 p-10  flex justify-center text-center">
                Преимущества компании
              </h2>

              <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 text-[#fffa] p-5 pb-20">
                <div className="steps__step text-center ">
                  <div className="mb-4 flex justify-center">
                    <Shopping />
                  </div>
                  <h3 className="h3 mb-5 ">Широкий ассортимент</h3>
                  <p className="mb-5 max-w-md mx-auto">
                    Мы предлагаем разнообразие товаров, чтобы удовлетворить
                    разные потребности клиентов.{" "}
                  </p>
                </div>
                <div className="steps__step text-center ">
                  <div className="mb-4 flex justify-center">
                    <Handshake />
                  </div>
                  <h3 className="h3 mb-5">Официальные дистрибьюторы</h3>
                  <p className="mb-5 max-w-md mx-auto">
                    Мы сотрудничаем только с надежными поставщиками, гарантируя
                    качество продукции.{" "}
                  </p>
                </div>
                <div className="steps__step text-center ">
                  <div className="mb-4 flex justify-center">
                    <Warranty />
                  </div>
                  <h3 className="h3 mb-5">Гарантия качества</h3>
                  <p className="mb-5 max-w-md mx-auto">
                    Мы работаем в удобное для вас время, гарантируя доступность
                    нашей продукции.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div ref={miniMap}>
            <Maps />
          </div>
          <div ref={contacts}>
            <Form />
          </div>
          <Footer />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
