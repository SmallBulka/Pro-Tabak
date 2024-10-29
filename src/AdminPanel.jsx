import React from "react";
import { Navigate } from "react-router-dom";
import Accordion from "./components/DndCatalog";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditor, setProductProperty } from "./redux/slices/itemsSlice";
const AdminPanel = () => {
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.items);
  console.log(currentProduct);
  React.useEffect(() => {
    dispatch(setIsEditor());
  }, []);

  if (!window.localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex flex-col justify-around   bg-slate-400   m-auto p-4 ">
      <div className="h-[600px] flex flex-col justify-around  bg-[#191d21] rounded-[20px] mb-4">
        <input
          placeholder="Название продукта"
          className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
          value={currentProduct.name ? currentProduct.name : ""}
          onChange={(event) =>
            dispatch(
              setProductProperty({ property: "name", text: event.target.value })
            )
          }
          type="text"
        />
        <input
          placeholder="Описание продукта"
          className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
          value={currentProduct.description ? currentProduct.description : ""}
          onChange={(event) =>
            dispatch(
              setProductProperty({
                property: "description",
                text: event.target.value,
              })
            )
          }
          type="text"
        />
        <input
          placeholder="Количество смолы"
          className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
          value={currentProduct.resin ? currentProduct.resin : ""}
          onChange={(event) =>
            dispatch(
              setProductProperty({
                property: "resin",
                text: event.target.value,
              })
            )
          }
          type="number"
        />
        <input
          placeholder="Количество никотина"
          className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
          value={currentProduct.nicotine ? currentProduct.nicotine : ""}
          onChange={(event) =>
            dispatch(
              setProductProperty({
                property: "nicotine",
                text: event.target.value,
              })
            )
          }
          type="number"
        />
        <fieldset>
          <legend>Страна</legend>
          <div>
            <input
              className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
              value={currentProduct.nicotine ? currentProduct.nicotine : ""}
              onChange={(event) =>
                dispatch(
                  setProductProperty({
                    property: "nicotine",
                    text: event.target.value,
                  })
                )
              }
              type="radio"
            />
            <label></label>
          </div>
        </fieldset>
      </div>
      <Accordion isEditor />
    </div>
  );
};

export default AdminPanel;
