"use client";
import { Categoria, Loading, PaginationUi } from "@/components";
import { useGetCategoriasQuery } from "@/redux";
import { useEffect, useState } from "react";

interface Categoria {
  id: number;
  name: string;
  imagen: string;
  createdAt: string;
  updatedAt: string;
}

export const Categorias: React.FC = () => {
  const { data: categorias, isLoading, error } = useGetCategoriasQuery("");
  const [isCat, setIsCat] = useState<Categoria[]>([]);

  // paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);
  const paginacion = Math?.ceil(isCat.length / perPage) || 1;
  //
  useEffect(() => {
    if (categorias) setIsCat(categorias?.data);

    if (isCat && isCat.length > perPage) {
      setCurrentPage(1);
    }
  }, []);

  return (
    <section className="flex flex-col items-center">
      <div className="mx-auto pt-4 inline-flex flex-wrap justify-center gap-4">
        {isLoading ? (
          <Loading />
        ) : (
          isCat
            .slice(
              (currentPage - 1) * perPage,
              (currentPage - 1) * perPage + perPage
            )
            .map((cat: Categoria, i: number) => (
              <Categoria key={i} id={cat.id} name={cat.name} />
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
