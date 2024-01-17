import { Productos } from '@/components';
import { FaWhatsapp } from 'react-icons/fa';
import { useFloatBtn } from 'hooks';

export const CategoriaPage: React.FC = () => {
  const goWsp = useFloatBtn({
    icon: <FaWhatsapp size={25} />,
    variant: 'wsp',
    contenedor: true,
    pathWsp: '',
  });
  return (
    <>
      <Productos />
      {goWsp}
    </>
  );
};
