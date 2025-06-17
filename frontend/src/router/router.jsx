// React
import React, { Suspense, lazy } from "react";

// React Router
import { createBrowserRouter } from "react-router";

// Pages
const Login = lazy(() => import("../pages/login/login"));
const Todo = lazy(() => import("../pages/todo/todo"));
const Image = lazy(() => import("../pages/image/image"));
const Layout = lazy(() => import("../layouts/Layout"));

const links = [
  { url: "/todo", label: "Todo" },
  { url: "/image", label: "Imagen" },
  { url: "/", label: "Cerrar sesión" }
];

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>cargando...</div>}>
        <Login />
      </Suspense>
    )
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div>cargando...</div>}>
        <Layout links={links} />
      </Suspense>
    ),
    children: [
      {
        path: "todo",
        element: (
          <Suspense fallback={<div>cargando...</div>}>
            <Todo />
          </Suspense>
        )
      },
      {
        path: "image",
        element: (
          <Suspense fallback={<div>cargando...</div>}>
            <Image />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;