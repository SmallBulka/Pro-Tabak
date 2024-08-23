import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function Maps() {
  return (
    <div>
      <hr className="br m-auto"></hr>
      <h2 className="h2 p-10  flex justify-center">Где купить?</h2>
      <div className="flex justify-center ">
        <YMaps>
          <Map
            className="scroll"
            width="1120px"
            height="360px"
            defaultState={{ center: [57.14672, 65.54509], zoom: 11 }}
          >
            <Placemark geometry={[57.148039, 65.543221]} />
            <Placemark geometry={[57.10702, 65.559319]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Maps;
