import {
  CategoriaByIdQueryFn,
  ProductosRes,
} from '@/interfaces/categorias/interfaces-categorias';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL_BASE;

const fetchCategoriaById: CategoriaByIdQueryFn = async (id) => {
  const { data } = await axios.get<ProductosRes>(`${apiUrl}/categorias/${id}`);
  return data;
};

export const useCategoriaId = (id: string) => {
  return useQuery<ProductosRes>({
    queryKey: ['categoria', id],
    queryFn: () => fetchCategoriaById(id),
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: true,
  });
};
