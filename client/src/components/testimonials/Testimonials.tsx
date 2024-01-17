import React from 'react';
import { Testimonial } from './Testimonial';
import { Button } from '../ui';
import { Link } from 'react-router-dom';

export const Testimonials = () => {
  return (
    <section className='py-4'>
      <div className='border border-gray-200 bg-gray-100 flex flex-col sm:justify-between md:flex md:flex-row gap-2 w-full py-4 px-4 rounded-xl'>
        <div>
          <h1 className='font-bold text-gray-800'>Reseñas</h1>
          <span>
            La excelencia de nuestros productos contada por nuestros clientes
          </span>
        </div>
        <div className='flex gap-2 justify-end w-full max-w-md'>
          <Link
            target='_blank'
            to={
              'https://www.google.es/maps/place/www.lawebdelcolchon.es+-+Cabeceros+de+Cama/@38.6410494,-3.4694333,17z/data=!4m18!1m9!3m8!1s0xd694b06e2b3d2e3:0x815ef23ada67b947!2swww.lawebdelcolchon.es+-+Cabeceros+de+Cama!8m2!3d38.6410452!4d-3.4668584!9m1!1b1!16s%2Fg%2F11hbgbnzll!3m7!1s0xd694b06e2b3d2e3:0x815ef23ada67b947!8m2!3d38.6410452!4d-3.4668584!9m1!1b1!16s%2Fg%2F11hbgbnzll?entry=ttu'
            }
          >
            <Button variant='primary'>Deja tu reseña</Button>
          </Link>
          <Link to={'#'}>
            <Button variant='secondary'>Todas</Button>
          </Link>
        </div>
      </div>

      <div className='grid mb-8 p-1 gap-2 mx-auto rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800'>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
};
