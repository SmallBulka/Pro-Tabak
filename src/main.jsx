// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./AdminPanel.jsx";
import AuthPanel from "./AuthPanel.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<AuthPanel />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);
