import { PaginationUi, Producto, ProductoSk } from '@/components';
import { formatDescription } from '@/utils/formatDescription';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCategoriaId } from '@/hooks/query/useCategoriaId';
import { Product } from '@/interfaces/categorias/interfaces-categorias';

export const Productos: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { categoriaIdQuery } = useCategoriaId(id || '');

  useEffect(() => {
    if (!categoriaIdQuery.isLoading) {
      if (
        categoriaIdQuery.data.data.products_by_cat &&
        categoriaIdQuery.data.data.products_by_cat.length > perPage
      ) {
        setCurrentPage(1);
      }
    }
  }, [categoriaIdQuery, categoriaIdQuery.isLoading]);

  // paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const paginacion =
    Math?.ceil(
      (categoriaIdQuery.data.data.products_by_cat.length || 0) / perPage
    ) || 1;
  //

  return (
    <section className='flex flex-col items-center'>
      <div className='grid grid-cols-1 border grid-flow-auto place-content-center sm:grid-cols-3 md:grid-cols-3 gap-y-2 gap-x-1'>
        {!categoriaIdQuery.data.data.products_by_cat
          ? [1, 2, 3, 4, 5, 6].map((item, i) => (
              <div key={i} className='w-full'>
                <ProductoSk />
              </div>
            ))
          : categoriaIdQuery.data.data.products_by_cat
              .slice(
                (currentPage - 1) * perPage,
                (currentPage - 1) * perPage + perPage
              )
              .map((cat: Product, i: number) => (
                <Producto
                  key={i}
                  id_category={id || ''}
                  idp={cat.idp}
                  id_o={cat.id_o}
                  cat_name={cat.cat_name}
                  attribute_price={cat.attribute_price}
                  proname={cat.proname}
                  offer={false}
                  description={formatDescription(cat.description)}
                />
              ))}
        {}
      </div>
      <PaginationUi
        totalPages={paginacion}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
