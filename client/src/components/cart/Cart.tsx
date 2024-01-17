import { useProductContext } from '@/context/ProductContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useState, useEffect } from 'react';

export const Cart = () => {
  const { products, setProducts } = useProductContext();
  console.log(products);

  const handleRemove = (e) => {
    console.log(e.target.id);
    const toRemove = products.indexOf(e.target.id);
    console.log(toRemove);
    //   setProducts([]);
  };

  return (
    <div className='relative w-full max-w-xl shadow-md sm:rounded-lg'>
      <table className='w-full max-w-sm text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Nombre
            </th>
            <th scope='col' className='px-6 py-3'>
              Color
            </th>
            <th scope='col' className='px-6 py-3'>
              Categoria
            </th>
            <th scope='col' className='px-6 py-3'>
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr
              key={i}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
            >
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {item.name}
              </th>
              <td className='px-6 py-4'>Silver</td>
              <td className='px-6 py-4'>{item.cat_name}</td>
              <td className='px-6 py-4'>${item.price}</td>
              <td className='px-6 py-4 text-right'>
                <button
                  id={item?.id?.toString()}
                  onClick={handleRemove}
                  className='font-bold px-1 flex items-center bg-gray-100 text-primary hover:bg-gray-200 border rounded-md'
                >
                  <span className='w-full p-0 leading-tight align-middle'>
                    x
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
