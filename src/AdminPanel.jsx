import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Accordion from "./components/DndCatalog";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditor, setProductProperty } from "./redux/slices/itemsSlice";
import axios from "./axios";
// import { green, orange } from "@mui/material/colors";
// import Button from "@mui/material/Button";
import { Button, Tab, Tabs, TextField } from "@mui/material";
import { baseURL } from "./axios";

const AdminPanel = () => {
  const inputFileRef = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentProduct } = useSelector((state) => state.items);
  console.log(currentProduct);
  React.useEffect(() => {
    dispatch(setIsEditor());
    dispatch(setProductProperty({ property: "type", text: "cigarettes" }));
  }, []);
  const onClickRemoveImage = async () => {
    try {
      await axios.delete("/upload" + currentProduct.imageUrl.slice(8));

      dispatch(
        setProductProperty({
          property: "imageUrl",
          text: "",
        })
      );
    } catch (error) {
      console.warn(error);
      alert("Не удалось удалить изображение");
    }
  };
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      const { data } = await axios.post("/upload", formData);
      dispatch(
        setProductProperty({
          property: "imageUrl",
          text: data?.url,
        })
      );

      console.log(data.url);
    } catch (error) {
      console.error(error);
      alert("Не удалось загрузить изображение");
    }
  };
  if (!window.localStorage.getItem("token")) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className="flex flex-col justify-around  bg-slate-400   p-4 ">
      <div className="min-h-[600px] h-fit flex flex-col justify-around  bg-[#191d21] rounded-[20px] mb-4 p-6">
        <Button
          color="error"
          sx={{ width: "200px" }}
          variant="outlined"
          size="large"
          className="bg-white "
          onClick={() => {
            if (confirm("Вы действительно хотите выйти?")) {
              window.localStorage.removeItem("token");
              navigate("/auth");
            }
          }}
        >
          Выйти
        </Button>
        {currentProduct.type && (
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{ color: "white" }}
            value={currentProduct.type ? currentProduct.type : ""}
            onChange={(event, newValue) =>
              dispatch(
                setProductProperty({
                  property: "type",
                  text: newValue,
                })
              )
            }
          >
            <Tab sx={{ color: "white" }} label="Сигареты" value="cigarettes" />
            <Tab sx={{ color: "white" }} label="Табак" value="tobacco" />
            <Tab sx={{ color: "white" }} label="Напитки" value="drinks" />
            <Tab
              sx={{ color: "white" }}
              label="Аксессуары и другое"
              value="other"
            />
          </Tabs>
        )}
        <TextField
          sx={{
            padding: "5px",
            color: "white",
            label: { color: "#1976d2" },
            input: { color: "white" },
          }}
          variant="standard"
          label="Название продукта"
          className="  border-solid border-[2px] border-black rounded-md "
          value={currentProduct.name ? currentProduct.name : ""}
          onChange={(event) =>
            dispatch(
              setProductProperty({ property: "name", text: event.target.value })
            )
          }
          type="text"
        />
        <TextField
          sx={{
            color: "white",
            padding: "5px",
            label: { color: "#1976d2" },
            input: { color: "white" },
          }}
          variant="standard"
          label="Описание продукта"
          className="  border-solid border-[2px] border-black rounded-md "
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

        {currentProduct.type === "cigarettes" && (
          <>
            <TextField
              sx={{
                color: "white",
                padding: "5px",
                label: { color: "#1976d2" },
                input: { color: "white" },
              }}
              variant="standard"
              label="Количество смолы"
              className="  border-solid border-[2px] border-black rounded-md "
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
            <TextField
              sx={{
                color: "white",
                padding: "5px",
                label: { color: "#1976d2" },
                input: { color: "white" },
              }}
              variant="standard"
              label="Количество никотина"
              className="  border-solid border-[2px] border-black rounded-md "
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
            <Tabs
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              sx={{ color: "white" }}
              value={currentProduct.country ? currentProduct.country : ""}
              onChange={(event, newValue) =>
                dispatch(
                  setProductProperty({
                    property: "country",
                    text: newValue,
                  })
                )
              }
            >
              <Tab sx={{ color: "white" }} label="Любая" value="" />
              <Tab sx={{ color: "white" }} label="Россия" value="Russia" />
              <Tab sx={{ color: "white" }} label="Германия" value="Germany" />
              <Tab sx={{ color: "white" }} label="Армения" value="Armenia" />
              <Tab sx={{ color: "white" }} label="Корея" value="Korea" />
            </Tabs>
            <Tabs
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              sx={{ color: "white" }}
              value={currentProduct.brand ? currentProduct.brand : ""}
              onChange={(event, newValue) =>
                dispatch(
                  setProductProperty({
                    property: "brand",
                    text: newValue,
                  })
                )
              }
            >
              <Tab sx={{ color: "white" }} label="Любая" value="" />
              <Tab sx={{ color: "white" }} label="K&G" value="kg" />
              <Tab sx={{ color: "white" }} label="Филлип Моррис" value="pmi" />
              <Tab sx={{ color: "white" }} label="BAT" value="bat" />
              <Tab sx={{ color: "white" }} label="JTI" value="jti" />
              <Tab sx={{ color: "white" }} label="VonEiken" value="VonEiken" />
              <Tab sx={{ color: "white" }} label="Grand Tobacco" value="gt" />
              <Tab
                sx={{ color: "white" }}
                label="Cigaronne"
                value="cigaronne"
              />
              <Tab sx={{ color: "white" }} label="Peppell" value="peppell" />
            </Tabs>
          </>
        )}
        <Button
          onClick={() => inputFileRef.current.click()}
          variant="outlined"
          size="large"
        >
          Загрузить превью
        </Button>
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
        {currentProduct.imageUrl && (
          <>
            <Button
              variant="contained"
              color="error"
              onClick={onClickRemoveImage}
            >
              Удалить
            </Button>
            <img
              className=""
              src={baseURL + currentProduct.imageUrl}
              alt="Uploaded"
            />
          </>
        )}
        {/* type
         */}
      </div>
      <Accordion isEditor />
    </div>
  );
};

export default AdminPanel;
