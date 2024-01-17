import { ProductoProps } from '@/interfaces/productos/interfaces-productos';
import { Accordeon } from '../accordeon/Accordeon';
import {
  FavoriteButton,
  DropdownUi,
  Button,
  SocialIcons,
  Reviews,
} from '../ui';

import { GiNightSleep } from 'react-icons/gi';
import { PiSealCheckFill } from 'react-icons/pi';
export const SeccionDetailR: React.FC<ProductoProps> = ({
  catName,
  proname,
  price,
  description,
  atributos,
  selected,
  setSelected,
}) => {
  const indexDescription = description?.indexOf('.');
  const textDescription = description?.slice(0, indexDescription + 1);

  return (
    <div className='bg-slate-100 rounded-xl px-2 lg:w-full w-full lg:px-2 py-6 mt-6 lg:mt-0'>
      <h2 className='text-sm title-font text-gray-500 tracking-widest'>
        {catName || 'CATEGORIA'}
      </h2>
      <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
        {proname}
      </h1>
      <div className='flex mb-4 justify-between mx-4'>
        {/* reviews */}
        <Reviews />

        {/* social */}
        <SocialIcons />
      </div>
      {/* descripcion formateada */}
      <p
        className='leading-relaxed font-thin'
        dangerouslySetInnerHTML={{ __html: textDescription }}
      >
        {/* {textDescription || "DESCRIPCION DEL PRODUCTO"} */}
      </p>
      {/* medidas y color */}
      <div className=' flex mt-6 items-center justify-between  border-gray-100 mb-5'>
        {/* color */}
        {/* <DropdownUi title='Color' list={['S', 'M', 'L', 'XL']} /> */}
        {/* medidas */}
        <DropdownUi
          selected={selected}
          setSelected={setSelected}
          atributos={atributos}
        />
      </div>
      {/* seccion de precio y button */}
      <div className='flex mb-2 justify-between bg-white px-2 py-1 rounded-2xl'>
        <span className='title-font font-medium text-2xl text-gray-900'>
          {price || 'PRECIO'}€
        </span>
        <div className='flex'>
          <FavoriteButton />
        </div>
      </div>
      <Button>Comprar</Button>
      <Accordeon
        icon={<GiNightSleep />}
        title='Pruebalo y devuelvelo gratis'
        description='Tienes 100 noches GRATIS para probar tu nuevo colchón, y si no te convence, te lo cambiamos.'
      />
      <Accordeon
        icon={<PiSealCheckFill />}
        title='Somos fabricantes'
        description='Cada uno de nuestros productos se fabrican para que consigas el mejor descanso. La calidad que nos distingue y que nos ha convertido en el referente del descanso.'
      />
    </div>
  );
};
