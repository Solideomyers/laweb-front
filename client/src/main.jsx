import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {queryClient} from "../react-query.ts";
import { router } from "./router.jsx";
import { Breadcrumbs } from "components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={ false} />
          <RouterProvider router={router}>
            <Breadcrumbs />
          </RouterProvider>
        </QueryClientProvider>
  </React.StrictMode>
);
