import React from 'react'

export const Enlaces = () => {
  return (
    <div className='grid grid-cols-2 grid-flow-col-dense gap-2 w-full sm:gap-4 sm:grid-cols-3'>
      {/* informacion */}
      <div>
        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
          Información
        </h2>
        <ul className=' w-full flex flex-col text-gray-600 dark:text-gray-400'>
          <li className='group mb-4 '>
            <a
              href='https://www.lawebdelcolchon.es/pages.php?id=2&footer=1'
              className='hover:underline group-hover:text-primary transition-colors ease-linear delay-150 duration-150 w-full'
            >
              Politica de Privacidad
            </a>
          </li>
          <li className='group'>
            <a
              href='https://www.lawebdelcolchon.es/pages.php?id=3&footer=1'
              className='hover:underline group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              Quienes somos
            </a>
          </li>
          <li className='group'>
            <a
              href='https://www.lawebdelcolchon.es/pages.php?id=108&footer=1'
              className='hover:underline group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              Condiciones de uso y venta
            </a>
          </li>
          <li className='group'>
            <a
              href='https://www.lawebdelcolchon.es/pages.php?id=314&footer=1'
              className='hover:underline group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              Envíos y devoluciones gratis
            </a>
          </li>
          <li className='group'>
            <a
              href='https://www.lawebdelcolchon.es/pages.php?id=328&footer=1'
              className='hover:underline group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              Nuestros Videos
            </a>
          </li>
        </ul>
      </div>
      {/* mi cuenta */}
      <div>
        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
          Mi Cuenta
        </h2>
        <ul className='text-gray-600 dark:text-gray-400'>
          <li className='group mb-4'>
            <a
              href='https://www.lawebdelcolchon.es/account.php'
              className='hover:underline group-hover:text-primary transition-colors ease-linear delay-150 duration-150 '
            >
              Información General
            </a>
          </li>
          <li className='group'>
            <a
              href='https://www.lawebdelcolchon.es/account.php?type=address'
              className='hover:underline group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              Direcciones
            </a>
          </li>
          <li className='group'>
            <a
              href='https://www.lawebdelcolchon.es/account.php?type=orders'
              className='hover:underline group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              Pedidos
            </a>
          </li>
        </ul>
      </div>
      {/* contacto */}
      <div>
        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
          Contacto
        </h2>
        <ul className='flex flex-col gap-2 text-gray-600 dark:text-gray-400'>
          <li className='group'>
            <a
              href='tel:926090440'
              className='hover:underline text-sm items-center flex gap-1 group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-phone-filled'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path
                  d='M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z'
                  strokeWidth={0}
                  fill='currentColor'
                />
              </svg>
              926090440
            </a>
          </li>
          <li className='group'>
            <a
              href='tel:648709325'
              className='hover:underline text-sm items-center w-full flex gap-1 group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-brand-whatsapp'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' />
                <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1' />
              </svg>
              648709325
            </a>
          </li>
          <li className='group'>
            <a
              href='info@lawebdelcolchon.es'
              className='hover:underline w-full text-sm items-center flex gap-1 group-hover:text-primary transition-colors ease-linear delay-150 duration-150'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-mail-filled'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path
                  d='M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z'
                  strokeWidth={0}
                  fill='currentColor'
                />
                <path
                  d='M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z'
                  strokeWidth={0}
                  fill='currentColor'
                />
              </svg>
              info@lawebdelcolchon.es
            </a>
          </li>
          <li className='group'>
            <a
              href='https://goo.gl/maps/55A2XizpDEY3UWy58'
              className='hover:underline text-sm items-center group-hover:text-primary transition-colors ease-linear delay-150 duration-150 flex gap-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-map-pin-filled'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path
                  d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z'
                  strokeWidth={0}
                  fill='currentColor'
                />
              </svg>
              Dirección
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
