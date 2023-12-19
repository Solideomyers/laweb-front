import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriasApi } from "../api/categorias/categoriasApi";
import { productosApi } from "../api/productos/productosApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [categoriasApi.reducerPath]: categoriasApi.reducer,
    [productosApi.reducerPath]: productosApi.reducer, // Usar directamente el reducer
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(categoriasApi.middleware, productosApi.middleware),
});

export const persistor = persistStore(store);
