// React
import React from "react";

// Utils
import { authorization } from "../utils/authorization";

// Loaders
import { loaderLogin } from "../pages/login/loader.login";

// React Router
import { createBrowserRouter } from "react-router";

// Pages
import Login from "../pages/login/login";
import Todo from "../pages/todo/todo";
import Image from "../pages/image/image";
import Layout from "../layouts/Layout";
import NotFound from "../pages/notFound/notFound";

const links = [
  { url: "/todo", label: "Todo" },
  { url: "/image", label: "Imagen" },
  { url: "/", label: "Cerrar sesión" }
];

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: loaderLogin
  },
  {
    path: "/",
    element: <Layout links={links} />,
    children: [
      {
        path: "todo",
        element: <Todo />,
        loader: authorization,
      },
      {
        path: "image",
        element: <Image />,
        loader: authorization
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;