'use client';
import React from 'react';
import img from '../../assets/herosection.jpg';
import { Link, useNavigate } from 'react-router-dom';

interface Data {
  name: string;
  id: number;
}

export const Categoria: React.FC<Data> = ({ name, id }) => {
  const navigate = useNavigate();
  const handleRoute = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/categoria/${id}`);
    e.preventDefault();
  };

  return (
    <>
      <div className='group relative z-40 block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1 rounded-xl shadow-sm shadow-slate-400'>
        <img
          src={img}
          alt='Product Image'
          className='transform transition ease-out group-hover:scale-110 rounded-xl'
        />
        <div className='absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0' />
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <button
            // type='submit'
            onClick={handleRoute}
            className='rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-primary group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90'
          >
            {name}
          </button>
        </div>
      </div>
    </>
  );
};
