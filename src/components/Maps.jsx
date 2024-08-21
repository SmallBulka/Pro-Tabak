import { YMaps, Map, Placemark } from 'react-yandex-maps';

  function Maps() {
    
    return (
      <div>
        {/* <h3 className='h2'>Где купить?</h3> */}
      <div className='flex justify-center '>
        
      <YMaps>
        <Map width='1120px' height='360px' defaultState={{ center: [57.146720, 65.545090], zoom: 11 }}>
          <Placemark geometry={[57.148039, 65.543221]} />
          <Placemark geometry={[57.107020, 65.559319]} />
        </Map>
      </YMaps>
      </div>
      </div>
    );
  }
  
  export default Maps;
