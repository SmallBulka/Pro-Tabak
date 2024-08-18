import { Helmet } from "react-helmet";

  function Map() {
    return (
      <>
      
        <Helmet>
        <script type="text/javascript"  async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afbeedff7352fbd9895487d597a3cce8da037f7aef91413d9b8ff6b08bd2009aa&amp;width=1110&amp;height=360&amp;lang=ru_RU&amp;scroll=true"></script>        </Helmet>
        <div className="App"></div>
        
      </>
    );
  }
  
  export default Map;

