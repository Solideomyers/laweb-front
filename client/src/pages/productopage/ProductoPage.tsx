import {
  Accordeon,
  ProductoDetail,
  ProductoSk,
  ProductosRelated,
} from '@/components';
import { useFloatBtn } from '@/hooks';
import { useProducto } from '@/hooks/query/useProducto';

import { formatDescription } from '@/utils/formatDescription';
import React, { useCallback, useMemo } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

export const ProductoPage = React.memo(() => {
  const { idp, ido } = useParams<{
    idp: string;
    ido: string;
  }>();

  // Producto
  const { productoQuery } = useProducto(idp || '', ido || '');

  // boton de whatsapp
  const goWsp = useFloatBtn({
    icon: <FaWhatsapp size={25} />,
    variant: 'wsp',
    contenedor: true,
    pathWsp: '',
  });

  const formattedDescription = useMemo(
    () => formatDescription(productoQuery?.data?.data?.description || ''),
    [productoQuery?.data?.data.description]
  );

  const imgs = useMemo(() => {
    return productoQuery?.data?.data.img?.slice(0, 4)?.map((item, i) => (
      <div
        key={i}
        className='h-50 border border-gray-200 p-2 w-full max-w-content z-10 flex justify-center items-center rounded-3xl'
      >
        <img
          className='w-full hover:shadow-xl object-cover object-center rounded-3xl hover:scale-100 transition-transform duration-100 delay-100 ease-in-out'
          alt='carousel de productos'
          src={item?.img_path}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = `https://dummyimage.com/300/bababa/fff.png`;
          }}
        />
      </div>
    ));
  }, [productoQuery]);

  const relateProductos = useMemo(() => {
    return productoQuery?.data?.data.related?.map((item, i) => (
      <div
        key={i}
        className='h-50 border border-gray-200 p-2 animate-pulse w-full max-w-content z-10 flex justify-center items-center rounded-3xl'
      >
        <img
          className='w-full hover:shadow-xl object-cover object-center rounded-3xl hover:scale-100 transition-transform duration-100 delay-100 ease-in-out'
          alt='carousel de productos'
          src={`https://dummyimage.com/300/bababa/fff.png`}
        />
      </div>
    ));
  }, [productoQuery]);

  const renderContent = useCallback(() => {
    if (productoQuery.isLoading) {
      return (
        <div>
          <ProductoSk />
        </div>
      );
    }

    if (productoQuery.error) {
      return <div>Error: {productoQuery.error.message}</div>;
    }

    console.log(productoQuery?.data?.data.atributos);
    return (
      <section className='grid grid-cols-1 place-items-center'>
        <ProductoDetail
          atributos={
            productoQuery?.data?.data.atributos &&
            productoQuery?.data?.data.atributos
          }
          proname={productoQuery?.data?.data.proname || ''}
          catName={productoQuery?.data?.data.cat_name || ''}
          imgs={imgs}
          price={Number(productoQuery?.data?.data.attribute_price) || 0}
          description={formattedDescription}
        />
        <Accordeon title='Descripcion' description={formattedDescription} />
        <ProductosRelated items={relateProductos || []} />
        {goWsp}
      </section>
    );
  }, [
    productoQuery.isLoading,
    productoQuery.error,
    productoQuery,
    formattedDescription,
  ]);

  return renderContent();
});
