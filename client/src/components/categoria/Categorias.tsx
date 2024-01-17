import React, { useEffect, useState } from 'react';
import { Categoria, Loading, PaginationUi, ProductosSk } from '@/components';
import { useCategorias } from '@/hooks/query/useCategorias';
import { CategoriaData } from '@/interfaces/categorias/interfaces-categorias';

const CategoriaMemo = React.memo(Categoria, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id && prevProps.name === nextProps.name;
});

export const Categorias: React.FC = () => {
  const { data: categorias, isLoading, error } = useCategorias();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);

  useEffect(() => {
    if (categorias && categorias.data && categorias.data.length > perPage) {
      setCurrentPage(1);
    }
  }, [categorias, perPage]);

  if (isLoading) {
    return <ProductosSk />;
  }

  if (error) {
    console.error('Error al cargar categorías:', error);
    return <div>Error al cargar categorías</div>;
  }

  const paginacion = Math?.ceil((categorias?.data?.length || 0) / perPage) || 1;
  return (
    <section className='bg-white dark:bg-gray-900 dark:text-gray-100'>
      <h1 className='font-bold mt-4 text-2xl text-neutral-900'>Categorías</h1>
      <div className='container mx-auto px-4 py-4 lg:px-4 lg:py-10 xl:max-w-7xl'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {categorias?.data
            .slice(
              (currentPage - 1) * perPage,
              (currentPage - 1) * perPage + perPage
            )
            .map((cat: CategoriaData, i: number) => (
              <CategoriaMemo key={i} id={cat.id} name={cat.name} />
            ))}
        </div>
      </div>
      <PaginationUi
        totalPages={paginacion}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
