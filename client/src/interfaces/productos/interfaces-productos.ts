// useProducto
export interface ProductoQueryFn {
  (idp: string, ido: string): Promise<ProductoDetailRes>;
}

// Producto detail response API
export interface ProductoDetailRes {
  message: string;
  messageType: string;
  totales: object;
  data: ProductoDetailData;
}

export interface ProductoDetailData {
  idp: number;
  id_o: number;
  file_name: string;
  cat_name: string;
  id_category: string;
  proname: string;
  add_data?: string;
  categories?: string;
  availability?: string;
  unlimited_availability?: number;
  code?: string;
  options?: string;
  description: string;
  images?: string;
  url_image?: string;
  attribute_offer?: string;
  attribute_price: string;
  tax?: string;
  price?: string;
  pl_multitax?: string;
  minimun?: string;
  attribute_name?: number;
  attr_title?: string;
  by_exposure?: number;
  offer?: string;
  activo?: number;
  marked?: number;
  filter_body?: number;
  active?: number;
  as_filter?: number;
  visible?: number;
  img: ProductoImg[];
  //   imgs: SlideImg[];
  atributos: ProductoAtributo[];
  related: ProductoRelated[];
}

export interface Selected {
  id_o: number;
  attr_title: string;
  attribute_price: number;
  id_attr_name: number;
}

// ProductoDetail
export interface ProductoProps {
  catName: string;
  proname: string;
  price: number;
  description: string;
  atributos: Atributo[];
  imgs?: string[] | JSX.Element[];
  selected: Selected;
  setSelected: React.Dispatch<React.SetStateAction<Selected>>;
}

export interface Atributo {
  attr_title: string;
  attribute_price: number;
  id_o: number;
  id_attr_name: number;
}

export interface ProductoImg {
  img_path: string;
  id?: number;
  id_category?: number;
  id_product?: number;
  id_attribute?: number;
  id_option?: number;
  sku?: number;
  ean?: number;
  img_name?: string;
  img_order?: number;
  img_order_web?: number;
  created?: string;
  modified?: string;
  status?: number;
  laravel_through_key?: number;
}

export interface ProductoAtributo {
  attr_title: string;
  attribute_price: number;
  id_o?: number;
  id_attr_name?: number;
}

export interface ProductoTag {
  id: number;
  id_product: number;
  id_attribute_value: number;
  url_tag: string;
  desc_tag: string;
  title_tag: string;
  value_tag?: '';
  print_tag?: number;
  print_pral?: number;
}

export interface ProductoRelated {
  id?: number;
  name?: string;
  file_name?: string;
  simulator_name?: string;
  tag_extra?: string;
  tag_extra_name?: string;
  images?: string;
  url_image?: string;
  description?: string;
  categories?: string;
  suppliers?: number;
  code?: string;
  price?: string;
  offer?: string;
  tax?: string;
  price_with_tax?: number;
  availability?: string;
  unlimited_availability?: number;
  units?: string;
  attributes?: string;
  comments?: string;
  options?: string;
  tags?: string;
  add_data?: string;
  by_exposure?: number;
  meta_title?: string;
  meta_keywords?: string;
  meta_description?: string;
  price_catalog?: string;
  marked?: number;
  visible?: number;
  active?: number;
  showcase?: number;
  pl_multitax?: string;
  porte?: string;
  id_product?: number;
  id_related_product?: number;
  minimo?: string;
  offert?: string;
  ida?: number;
}
