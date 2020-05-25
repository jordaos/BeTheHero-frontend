import React from "react";
import { ToastContainer } from "react-toastify";

import "./global.scss";

import Routes from "./routes";

function App() {
  return (
    <div>
      <Routes />

      <ToastContainer />
    </div>
  );
}

export default App;
