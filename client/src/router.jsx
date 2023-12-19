import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { HomePage } from "pages";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        id: "home",
      },
    ],
  },
]);
