import { PaginationUi, Producto, ProductosSk } from '@/components';
import { formatDescription } from '@/utils/formatDescription';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCategoriaId } from '@/hooks/query/useCategoriaId';
import { Product } from '@/interfaces/categorias/interfaces-categorias';

export const Productos: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: productos, isLoading, error } = useCategoriaId(id || '');

  useEffect(() => {
    if (!isLoading) {
      if (
        productos?.data?.products_by_cat &&
        productos?.data?.products_by_cat.length > perPage
      ) {
        setCurrentPage(1);
      }
    }
  }, [productos, isLoading]);

  // paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const paginacion =
    Math?.ceil((productos?.data?.products_by_cat?.length || 0) / perPage) || 1;
  //

  return (
    <section className='flex flex-col items-center'>
      <div className='grid grid-cols-1 grid-flow-auto place-content-center sm:grid-cols-3 md:grid-cols-3 gap-y-2 gap-x-1'>
        {!productos?.data?.products_by_cat ? (
          <ProductosSk />
        ) : (
          productos?.data?.products_by_cat
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
            ))
        )}
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
