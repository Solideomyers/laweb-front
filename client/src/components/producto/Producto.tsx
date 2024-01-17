'use client';
import { Badge, Card } from 'keep-react';
import { Button } from '../ui';
import { Heart, ShoppingCart, MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import img from '../../assets/herosection.jpg';
import { Link } from 'react-router-dom';
import { useProductContext } from '@/context/ProductContext';
import { Product } from '@/interfaces/interfaces';

export const Producto: React.FC<Product> = ({
  attribute_price,
  proname,
  idp,
  id_o,
  id_category,
  offer,
  description,
  cat_name,
}) => {
  const indexDescription = description.indexOf('.');
  const textDescription = description.slice(0, indexDescription + 1);
  const { products, setProducts } = useProductContext();

  const handleAddProduct = () => {
    const updateProduct: Product = {
      id_category,
      proname,
      attribute_price,
      idp,
      id_o,
      description,
      cat_name,
    };
    console.log(cat_name);
    console.log('click');
    setProducts([...products, updateProduct]);
  };

  return (
    <>
      <Card
        className='size-30 hover:scale-y-105 overflow-hidden rounded-md hover:shadow-lg transition-transform ease-in-out duration-300'
        imgSrc={img}
        imgSize='md'
      >
        <Card.Container className='absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50'>
          <Heart size={20} weight='bold' color='white' />
        </Card.Container>
        <Card.Container className='p-6 flex flex-col items-center'>
          <Card.Container className='flex items-center justify-between w-full'>
            <Badge
              size='xs'
              colorType='light'
              color={`${offer ? 'error' : 'gray'}`}
            >
              {offer ? 'Oferta' : 'Actualizado'}
            </Badge>
            <Card.Title>Desde {attribute_price}$</Card.Title>
          </Card.Container>
          <Card.Container className='my-3'>
            <Card.Title>{proname}</Card.Title>
            <Card.Description>
              <span
                dangerouslySetInnerHTML={{ __html: textDescription }}
                className='grid grid-cols-1 grid-rows-1 font-light text-sm whitespace-pre-wrap truncate overflow-hidden h-[60px] '
              />
            </Card.Description>
          </Card.Container>
          <Card.Container className='flex items-center justify-between gap-5'>
            <Button onClick={handleAddProduct} variant={'primary'}>
              <span className='pr-2'>
                <ShoppingCart size={24} />
              </span>
              Añadir
            </Button>
            <Link to={`/categoria/${id_category}/producto/${idp}/${id_o}`}>
              <Button variant={'secondary'}>
                <span className='pr-2'>
                  <MagnifyingGlass size={24} />
                </span>
                Detalle
              </Button>
            </Link>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
