import React, { useState } from 'react';
import { SeccionDetailR } from './SeccionDetailR';
import AliceCarousel from 'react-alice-carousel';
import {
  Atributo,
  ProductoProps,
  Selected,
} from '@/interfaces/productos/interfaces-productos';

export const ProductoDetail: React.FC<ProductoProps> = ({
  catName,
  proname,
  price,
  description,
  imgs,
  atributos,
}) => {
  const productosSort =
    atributos &&
    atributos?.sort(
      (a, b) => Number(a.attribute_price) - Number(b.attribute_price)
    );
  const [selected, setSelected] = useState<Selected>(atributos[0]);

  return (
    <section className=' text-gray-600 body-font w-full max-w-sm sm:max-w-lg lg:bg-white lg:max-w-7xl lg:px-4'>
      <div className='lg:grid lg:grid-cols-2 lg:place-content-center py-2 gap-x-4'>
        {/* seccion izquierda de la card */}
        <div className='lg:w-full w-full lg:h-1/2 object-cover object-center rounded-3xl'>
          <AliceCarousel
            items={imgs}
            autoPlay
            disableDotsControls={false}
            autoPlayInterval={4000}
            infinite
            animationType='fadeout'
            // autoWidth
            swipeExtraPadding={200}
            disableButtonsControls
            mouseTracking
            responsive={{
              0: {
                items: 1,
              },
              375: {
                items: 1,
                itemsFit: 'contain',
              },
              1024: {
                items: 1,
                itemsFit: 'fill',
              },
            }}
          />
        </div>

        {/* seccion derecha de la card */}
        <SeccionDetailR
          atributos={productosSort as Atributo[] | []}
          proname={proname}
          price={Number(selected?.attribute_price)}
          catName={catName}
          description={description}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </section>
  );
};
