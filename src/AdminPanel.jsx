import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Accordion from "./components/DndCatalog";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentProduct,
  setIsEditor,
  setProductProperty,
} from "./redux/slices/itemsSlice";
import axios from "./axios";
// import { green, orange } from "@mui/material/colors";
// import Button from "@mui/material/Button";
import {
  Backdrop,
  Button,
  CircularProgress,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { baseURL } from "./axios";

const AdminPanel = () => {
  const inputFileRef = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentProduct } = useSelector((state) => state.items);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  console.log(currentProduct);

  React.useEffect(() => {
    if (currentProduct?._id) {
      setIsEditing(true);
    } else setIsEditing(false);
  }, [currentProduct?._id]);

  React.useEffect(() => {
    dispatch(setIsEditor());
    dispatch(setProductProperty({ property: "type", text: "cigarettes" }));
  }, []);
  React.useEffect(() => {
    if (currentProduct?.type !== "cigarettes") {
      dispatch(setProductProperty({ property: "nicotine", text: undefined }));
      dispatch(setProductProperty({ property: "resin", text: undefined }));
    }
  }, [currentProduct.type]);
  //отправка товара на бэкэнд
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      //   await new Promise((resolve) => {
      //     setTimeout(() => resolve(), 3000);
      //   });
      if (!currentProduct.name) {
        alert("введите название");
        return;
      }
      if (!currentProduct.type) {
        alert("введите тип продукта");
        return;
      }
      const fields = {
        name: currentProduct.name,
        description: currentProduct?.description
          ? currentProduct?.description
          : "",
        nicotine: currentProduct?.nicotine
          ? Number(currentProduct.nicotine)
          : "",
        resin: currentProduct?.resin ? Number(currentProduct.resin) : "",
        country: currentProduct?.country ? currentProduct.country : "",
        brand: currentProduct?.brand ? currentProduct.brand : "",
        imageUrl: currentProduct?.imageUrl ? currentProduct.imageUrl : "",
      };
      console.log(fields);
      if (isEditing) {
        await axios.patch(
          "/product/" + currentProduct.type + "/" + currentProduct._id,
          fields
        );
      } else {
        await axios.post("/product/" + currentProduct.type, fields);
      }
      dispatch(setCurrentProduct({ type: "cigarettes" }));
    } catch (error) {
      console.warn(error);
      alert("Ошибка при создании товара");
    } finally {
      setIsLoading(false);
    }
  };
  //удаление товара
  const onDelete = async () => {
    try {
      setIsLoading(true);
      if (isEditing) {
        await axios.delete(
          "/product/" + currentProduct.type + "/" + currentProduct._id
        );
        dispatch(setCurrentProduct({ type: "cigarettes" }));
      } else {
        alert("Выберете товар для удаления!");
      }
    } catch (error) {
      console.warn(error);
      alert("Ошибка при создании статьи");
    } finally {
      setIsLoading(false);
    }
  };
  //удаление фото
  const onClickRemoveImage = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  //добвыление фото и загрузка на бэкэнд, бэкэнд возвращает ссылку на фото и мы ее вшиваем в товар
  const uploadImage = async (event) => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  if (!window.localStorage.getItem("token")) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className="flex flex-col justify-around  bg-slate-400   p-4 ">
      <div className="min-h-[600px] h-fit flex flex-col justify-around  bg-[#191d21] rounded-[20px] mb-4 p-6">
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="text-white flex justify-around border-[1px] border-solid rounded w-[400px] px-3 py-1 self-center text-2xl">
          {isEditing ? "Редактирование товара" : "Создание товара"}
        </div>
        <div className="flex justify-around  flex-wrap">
          <Button
            color="error"
            sx={{ width: "200px", margin: "10px" }}
            variant="contained"
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
          {isEditing && (
            <Button
              color="error"
              sx={{ width: "200px", margin: "10px" }}
              variant="contained"
              className="bg-white "
              onClick={() => {
                if (window.confirm("Удалить товар?")) {
                  onClickRemoveImage();
                  onDelete();
                }
              }}
            >
              удалить товар
            </Button>
          )}
          <Button
            sx={{ width: "fit-content", margin: "10px" }}
            variant="contained"
            className="bg-white "
            onClick={() => {
              if (confirm("Создать новый товар?")) {
                dispatch(setCurrentProduct({ type: "cigarettes" }));
              }
            }}
          >
            Создать новый товар
          </Button>
          <Button
            sx={{ width: "200px", margin: "10px" }}
            onClick={() => inputFileRef.current.click()}
            variant="contained"
            size="large"
          >
            Загрузить фото
          </Button>

          <Button
            onClick={onSubmit}
            variant="contained"
            sx={{ width: "200px", margin: "10px" }}
            color="success"
          >
            Сохранить товар
          </Button>
        </div>
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
            <div className="flex justify-around  flex-wrap">
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
            </div>
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
        {currentProduct.imageUrl && (
          <div className="flex flex-wrap justify-around items-center m-3 p-3">
            <Button
              sx={{ width: "200px", margin: "10px" }}
              variant="contained"
              color="error"
              onClick={onClickRemoveImage}
            >
              Удалить фото
            </Button>
            <img
              className="h-fit w-fit"
              src={baseURL + currentProduct.imageUrl}
              alt="Uploaded"
            />
          </div>
        )}
        {/* <div className="flex flex-wrap justify-around items-center m-3 p-3">
          
        </div> */}
        <input ref={inputFileRef} type="file" onChange={uploadImage} hidden />
      </div>
      <Accordion isEditor />
    </div>
  );
};

export default AdminPanel;
