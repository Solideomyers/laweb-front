// useCategoriaId
export interface CategoriaByIdQueryFn {
  (id: string): Promise<ProductosRes>;
}

//Product inside products_by_cat
export interface Product {
  idp: number;
  id_o: number;
  id_category: string;
  proname: string;
  cat_name: string;
  attribute_price: number;
  description: string;
  file_name?: string;
  add_data?: string;
  categories?: string;
  availability?: string;
  code?: string;
  attribute_offer?: string;
  tax?: string;
  price?: string;
  minimun?: string;
  attribute_name?: number;
  attr_title?: string;
  activo?: number;
  marked?: number;
  filter_body?: number;
  active?: number;
  as_filter?: number;
  visible?: number;
  offer?: boolean;
}

// response API
export interface ProductosRes {
  message: string;
  messageType: string;
  totalProducts: number;
  data: Data;
}

// data from products_by_cat
export interface Data {
  id: number;
  name: string;
  meta_keywords?: string;
  meta_description: string;
  products_by_cat: Product[];
}

// useCategorias
export interface CategoriasQueryFn {
  (): Promise<CategoriaRes>;
}

// Categorias
export interface CategoriaRes {
  messageType: string;
  message: string;
  totalcategorias: number;
  data: CategoriaData[];
}

// Categoria
export interface CategoriaData {
  id: number;
  name: string;
  description?: string;
  meta_keywords?: string;
  meta_description?: string;
  url_details?: string;
  icon?: string;
  position?: number;
}
