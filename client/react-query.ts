import { QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 10,
      staleTime: 1000 * 60 * 5,
    },
  },
});
const apiUrl = import.meta.env.VITE_API_URL_BASE;
export { queryClient, apiUrl };
