import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CategoriaPage, HomePage, ProductoPage, NotfoundPage, ContactPage } from "pages";
import {Cart} from "components"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Page404 />,
    children: [
      {
        index:true,
        // path: "/home",
        element: <HomePage />,
        id: "home",
      },
      {
        path: "/categoria/:id",
        element: <CategoriaPage />,
        id: "categoriabyid",
      },
      {
        path: "/categoria/:id/producto/:idp/:ido",
        element: <ProductoPage />,
        id: "productobyidp",
      },
      {
        path: "/cart",
        element: <Cart/>,
        id: "cesta"
      },
      {
        path: "/contact",
        element: <ContactPage/>
}
    ],
  },
  {
    path: "*",
    element: <NotfoundPage />,
  },
]);
