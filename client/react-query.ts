import { QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();
const apiUrl = import.meta.env.VITE_API_URL_BASE;
export { queryClient, apiUrl };
