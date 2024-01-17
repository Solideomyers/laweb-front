import {
  CategoriaRes,
  CategoriasQueryFn,
} from '@/interfaces/categorias/interfaces-categorias';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL_BASE;

const fetchCategorias: CategoriasQueryFn = async () => {
  const { data } = await axios.get<CategoriaRes>(`${apiUrl}/categorias`);
  return data;
};

export const useCategorias = () => {
  return useQuery<CategoriaRes>({
    queryKey: ['categorias'],
    queryFn: fetchCategorias,
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });
};
