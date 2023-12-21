import { Loading, PaginationUi, Producto } from "@/components";
import { useGetCategoriasByIdQuery } from "@/redux";
import { formatDescription } from "@/utils/formatDescription";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

interface Product {
  idp: number;
  id_category: string;
  proname: string;
  attribute_price: number;
  imagen: string;
  createdAt: string;
  updatedAt: string;
  offer: boolean;
  description: string;
}

export const Productos: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  //   const id = location.pathname.split("/")[2];
  const { data: categorias, isLoading, error } = useGetCategoriasByIdQuery(id);
  const [isCat, setIsCat] = useState<Product[]>([]);
  useEffect(() => {
    if (isLoading) {
      console.log("cargando");
    } else if (categorias) setIsCat(categorias?.data?.products_by_cat);
    else if (isCat && isCat.length > perPage) {
      setCurrentPage(1);
    }
  }, []);

  // paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const paginacion = Math?.ceil(isCat.length / perPage) || 1;
  //

  return (
    <section className="flex flex-col items-center">
      <div className="grid grid-cols-1 grid-flow-auto place-items-center sm:grid-cols-3 md:grid-cols-3 gap-y-2 gap-x-1">
        {isLoading ? (
          <Loading />
        ) : (
          isCat
            .slice(
              (currentPage - 1) * perPage,
              (currentPage - 1) * perPage + perPage
            )
            .map((cat: Product, i: number) => (
              <Producto
                key={i}
                id={id}
                idp={cat.idp}
                price={cat.attribute_price}
                name={cat.proname}
                offer={false}
                description={formatDescription(cat.description)}
              />
            ))
        )}
      </div>
      <PaginationUi
        totalPages={paginacion}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
