import {
  ProductoDetailRes,
  ProductoQueryFn,
} from '@/interfaces/productos/interfaces-productos';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { apiUrl } from '../../../react-query';

const fetchProducto: ProductoQueryFn = async (idp, ido) => {
  const { data } = await axios.get<ProductoDetailRes>(
    `${apiUrl}/productos/${idp}?ida=${ido}`
  );
  return data;
};

export const useProducto = (idp: string, ido: string) => {
  const productoQuery = useQuery<ProductoDetailRes>({
    queryKey: ['productos', idp, ido],
    queryFn: () => fetchProducto(idp, ido),
    refetchOnWindowFocus: false,
  });

  return {
    productoQuery,
  };
};
