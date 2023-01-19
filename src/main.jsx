import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./index.css";
import Messages from "./Messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "messages",
    element: <Messages/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
