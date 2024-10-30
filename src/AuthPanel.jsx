import React from "react";
import axios, { baseURL } from "./axios";
import { Navigate, useNavigate } from "react-router-dom";
const AuthPanel = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  //   const loginRef = React.useRef();
  //   const passwordRef = React.useRef("");
  //   React.useEffect(() => {
  //     console.log(login);
  //     console.log(password);
  //   }, [login]);
  const fetchLogin = async () => {
    try {
      if (login === "" || password === "") {
        alert("Введите логин и пароль");
        return;
      }
      const dataToFetch = { login, password };

      const { data } = await axios.post(baseURL + "/auth/login", dataToFetch);
      if ("token" in data) {
        window.localStorage.setItem("token", data.token);
      }
      navigate("/admin-panel");
    } catch (error) {
      alert("ошибка авторизации");
      console.log(error);
    }
  };
  if (window.localStorage.getItem("token")) {
    return <Navigate to="/admin-panel" />;
  }
  return (
    <div className="flex flex-col justify-around w-80 h-fit bg-slate-400 border-solid border-[2px] border-black rounded-md p-3 m-auto mt-10 ">
      <input
        // ref={loginRef}
        placeholder="Логин"
        className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        type="text"
      />
      <input
        // ref={passwordRef}
        placeholder="Пароль"
        className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      <button
        className="bg-white m-2 border-solid border-[2px] border-black rounded-md"
        onClick={fetchLogin}
      >
        Войти
      </button>
    </div>
  );
};

export default AuthPanel;
