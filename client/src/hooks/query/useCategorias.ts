import {
  CategoriaRes,
  CategoriasQueryFn,
} from '@/interfaces/categorias/interfaces-categorias';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { apiUrl } from '../../../react-query';

const fetchCategorias: CategoriasQueryFn = async () => {
  const { data } = await axios.get<CategoriaRes>(`${apiUrl}/categorias`);
  return data;
};

export const useCategorias = () => {
  const categoriasQuery = useQuery<CategoriaRes>({
    queryKey: ['categorias'],
    queryFn: fetchCategorias,
    refetchOnWindowFocus: false,
    initialData: {
      messageType: 'success',
      message: 'Resultados solicitados.',
      totalcategorias: 20,
      data: [
        {
          id: 1,
          name: 'Colchones',
        },
        {
          id: 9,
          name: 'Cabeceros',
        },
        {
          id: 281,
          name: 'Cabeceros Combinados',
        },
        {
          id: 50,
          name: 'Canapés Abatibles',
        },
      ],
    },
  });

  return {
    categoriasQuery,
  };
};
