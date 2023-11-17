import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PageContents from "./components/PageContents.jsx";
import { Read, Write, NewsDetail, Login, Register } from "./pages";
import { news } from "./contants/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <Outlet />
      </Root>
    ),
    children: [
      {
        path: "/",
        element: <PageContents />,
      },
      {
        path: "write",
        element: <Write />,
      },
      {
        path: "read",
        element: <Read news={news} />,
      },
      {
        path: "read/:id",
        element: <NewsDetail news={news} />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
