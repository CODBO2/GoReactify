// React
import React from "react";

// React Router
import { createBrowserRouter } from "react-router";

// Pages
import Login from "../pages/login/login";
import Todo from "../pages/todo/todo";
import Image from "../pages/image/image";
import Layout from "../layouts/Layout";

const links = [
  { url: "/todo", label: "Todo" },
  { url: "/image", label: "Imagen" },
  { url: "/", label: "Cerrar sesión" }
];

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/",
    element: <Layout links={links} />,
    children: [
      { path: "todo", element: <Todo /> },
      { path: "image", element: <Image /> }
    ]
  }
]);

export default router;