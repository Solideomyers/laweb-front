import {
  CategoriaByIdQueryFn,
  ProductosRes,
} from '@/interfaces/categorias/interfaces-categorias';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { apiUrl } from '../../../react-query';

const fetchCategoriaById: CategoriaByIdQueryFn = async (id) => {
  const { data } = await axios.get<ProductosRes>(`${apiUrl}/categorias/${id}`);
  return data;
};

export const useCategoriaId = (id: string) => {
  const categoriaIdQuery = useQuery<ProductosRes>({
    queryKey: ['categoria', id],
    queryFn: () => fetchCategoriaById(id),
    refetchOnWindowFocus: false,
    initialData: {
      message: 'Resultados solicitados.',
      messageType: 'success',
      totalProducts: 15,
      data: {
        id: 1,
        name: 'Colchones',
        products_by_cat: [
          {
            attribute_price: '79.99',
            cat_name: 'Colchones',
            categories: '1',
            description:
              '<p><strong>El colch&oacute;n viscoel&aacute;stico, con efecto memoria y termosensible.</strong><br /><strong>La viscoel&aacute;stica es una espuma de poliuretano, maleable e indeformable, que fue desarrollada por la NASA para sus astronautas y que tiene 2 principales caracter&iacute;sticas: es viscosa y el&aacute;stica, por consiguiente permite repartir mejor la presi&oacute;n que cualquier otra espumaci&oacute;n y es ideal para personas que manifiestan problemas musculares, de columna o de circulaci&oacute;n sangu&iacute;nea.</strong><br /><strong>El colch&oacute;n viscoel&aacute;stico es apto para cualquier persona, pues su principal caracter&iacute;stica es que se adapta f&aacute;cilmente al peso, forma y temperatura corporal de cada persona para brindar la mayor comodidad posible.</strong><br /><br /><strong>Firmeza: Firme</strong><br /><br /><strong>Tama&ntilde;os de ancho: 67, 70, 75, 80, 90, 105, 110, 120, 135, 140, 150, 160, 180, 200 cm.</strong><br /><strong>Tama&ntilde;o de largo: 180, 190, 200 cm</strong><br /><strong>Tama&ntilde;o de altura: 14 y 17 cm</strong><br /><strong>Grosor viscoel&aacute;stica: 1 cm.</strong><br /><br /><strong>Producto fabricado en Espa&ntilde;a</strong></p>',
            file_name: 'Colchon-Visco-Cama-Nido',
            id_category: '1',
            id_o: 97005,
            idp: 554,
            proname: 'Colchón Visco Cama Nido',
          },
        ],
      },
    },
  });

  return {
    categoriaIdQuery,
  };
};
