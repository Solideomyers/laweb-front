import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, {
  createContext,
  useContext,
  ReactNode,
  ReactElement,
} from 'react';

interface ProductContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface Product {
  id: string;
  name: string;
  idp: number;
  description: string;
  price: number;
  cat_name: string;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useLocalStorage('product', []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }

  return context;
};
