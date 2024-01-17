import React from 'react';
import { Button } from '../ui';

export const Form = () => {
  return (
    <section className=' bg-transparent w-full max-w-xl  dark:bg-gray-900'>
      <div className='bg-background-color py-8 lg:py-16 border-2 rounded-xl px-4 mx-auto max-w-screen-md'>
        <form action='#' className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-text-color dark:text-gray-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-background-color-component text-text-color text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-text-color dark:text-gray-300'
            >
              Asunto
            </label>
            <input
              type='text'
              id='subject'
              className='block p-3 w-full text-sm text-text-color bg-gray-50 rounded-lg border border-background-color-component shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Ayudanos a saber como podemos ayudarte'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-text-color dark:text-gray-400'
            >
              Mensaje
            </label>
            <textarea
              id='message'
              rows={6}
              className='block p-2.5 w-full text-sm text-text-color bg-gray-50 rounded-lg shadow-sm border border-background-color-component focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Deja tus comentarios...'
            ></textarea>
          </div>
          <Button type='submit'>Enviar</Button>
        </form>
      </div>
    </section>
  );
};
