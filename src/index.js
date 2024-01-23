import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
import "./index.css";
import App from "./App";
import RootLayout from "./pages/RootLayout";
import NotFound from "./pages/NotFound";
import CarsPage from "./pages/CarsPage";
import ConfigPage from "./pages/ConfigPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "/cars",
        element: <CarsPage />,
        children: [
          {
            path: "/cars/:carId",
            element: <ConfigPage />,
            errorElement: <NotFound />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
