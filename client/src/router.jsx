import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CategoriaPage, HomePage, ProductoPage, NotfoundPage } from "pages";
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
      {
        path: "/categoria/:id",
        element: <CategoriaPage />,
        id: "categoriabyid",
      },
      {
        path: "/categoria/:id/producto/:idp",
        element: <ProductoPage />,
        id: "productobyidp",
      },
    ],
  },
  {
    path: "*",
    element: <NotfoundPage />,
  },
]);
