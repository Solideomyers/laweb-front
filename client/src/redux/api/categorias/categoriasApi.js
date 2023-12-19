import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL_BASE;
export const categoriasApi = createApi({
  reducerPath: "categoriasApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategorias: builder.query({
      query: () => "categorias",
    }),
    getCategoriasById: builder.query({
      query: (id) => `categorias/${id}`,
    }),
  }),
});

export const { useGetCategoriasQuery, useGetCategoriasByIdQuery } =
  categoriasApi;
