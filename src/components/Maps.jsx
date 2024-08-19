import { YMaps, Map, Placemark } from 'react-yandex-maps';

  function Maps() {
    
    return (
      <div className='flex justify-center '>
        <h3 className=''>Где купить?</h3>
      <YMaps>
        <Map width='1120px' height='360px' defaultState={{ center: [57.146720, 65.545090], zoom: 11 }}>
          <Placemark geometry={[57.148039, 65.543221]} />
          <Placemark geometry={[57.107020, 65.559319]} />
        </Map>
      </YMaps>
      </div>
    );
  }
  
  export default Maps;
