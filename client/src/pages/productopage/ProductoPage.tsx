import { ProductoDetail } from "@/components";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const ProductoPage = () => {
  //   const { id } = useParams<{ id: string }>();
  const location = useLocation();
  console.log(location);
  //   console.log(id);
  //   const
  //   console.log(categorias);
  //   console.log(id);
  return (
    <div>
      <ProductoDetail />
      {/* <h1 className="text-9xl  p-52 bg-red-500">hola</h1> */}
    </div>
  );
};
