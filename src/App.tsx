import { Outlet } from "react-router-dom";

import { Header } from "./components/header/Header";

import "./index.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
