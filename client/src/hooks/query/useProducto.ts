import {
  ProductoDetailRes,
  ProductoQueryFn,
} from '@/interfaces/productos/interfaces-productos';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL_BASE;

const fetchProducto: ProductoQueryFn = async (idp, ido) => {
  const { data } = await axios.get<ProductoDetailRes>(
    `${apiUrl}/productos/${idp}?ida=${ido}`
  );
  console.log(data);
  return data;
};

export const useProducto = (idp: string, ido: string) => {
  return useQuery<ProductoDetailRes>({
    queryKey: ['productos', idp, ido],
    queryFn: () => fetchProducto(idp, ido),
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
