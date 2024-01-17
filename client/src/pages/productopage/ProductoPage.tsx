import {
  Accordeon,
  ProductoDetail,
  ProductoSk,
  ProductosRelated,
} from '@/components';
import { useFloatBtn } from '@/hooks';
import { useCategoriaId } from '@/hooks/query/useCategoriaId';
import { useProducto } from '@/hooks/query/useProducto';
import { ProductoAtributo } from '@/interfaces/productos/interfaces-productos';

import { formatDescription } from '@/utils/formatDescription';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

export const ProductoPage = React.memo(() => {
  const { idp, ido } = useParams<{
    idp: string;
    ido: string;
  }>();

  // Producto
  const {
    data: producto,
    isLoading,
    error,
  } = useProducto(idp || '', ido || '');
  console.log(producto?.data?.img);
  // boton de whatsapp
  const goWsp = useFloatBtn({
    icon: <FaWhatsapp size={25} />,
    variant: 'wsp',
    contenedor: true,
    pathWsp: '',
  });

  const formattedDescription = useMemo(
    () => formatDescription(producto?.data?.description || ''),
    [producto?.data?.description]
  );

  const imgs = useMemo(() => {
    return producto?.data?.img?.slice(0, 4)?.map((item, i) => (
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
  }, [producto]);

  const relateProductos = useMemo(() => {
    return producto?.data?.related?.map((item, i) => (
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
  }, [producto]);

  const renderContent = useCallback(() => {
    if (isLoading) {
      return (
        <div>
          <ProductoSk />
        </div>
      );
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    console.log(producto?.data?.atributos);

    return (
      <section className='grid grid-cols-1 place-items-center'>
        <ProductoDetail
          atributos={producto?.data?.atributos as ProductoAtributo[]}
          proname={producto?.data?.proname || ''}
          catName={producto?.data?.cat_name || ''}
          imgs={imgs}
          price={Number(producto?.data?.attribute_price) || 0}
          description={formattedDescription}
        />
        <Accordeon title='Descripcion' description={formattedDescription} />
        <ProductosRelated items={relateProductos || []} />
        {goWsp}
      </section>
    );
  }, [isLoading, error, producto, formattedDescription]);

  return renderContent();
});
