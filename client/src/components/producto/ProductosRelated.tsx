import React from 'react';
import AliceCarousel from 'react-alice-carousel';
interface Productos {
  items: JSX.Element[];
}
export const ProductosRelated: React.FC<Productos> = ({ items }) => {
  return (
    <div>
      <AliceCarousel
        items={items}
        autoPlay
        disableDotsControls={false}
        autoPlayInterval={4000}
        infinite
        animationType='fadeout'
        autoWidth
        swipeExtraPadding={200}
        disableButtonsControls
        mouseTracking
        responsive={{
          0: {
            items: 1,
          },
          375: {
            items: 1,
          },
          1024: {
            items: 3,
          },
        }}
      />
    </div>
  );
};
