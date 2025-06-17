import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./reseter.css";

// React Router
import { RouterProvider } from "react-router";
import router from "./src/router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);