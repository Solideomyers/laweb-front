'use client';
import React from 'react';
import img from '../../assets/herosection.jpg';
import { Link } from 'react-router-dom';

interface Data {
  name: string;
  id: number;
}

export const Categoria: React.FC<Data> = ({ name, id }) => {
  return (
    <>
      <Link
        to={`/categoria/${id}`}
        className='group relative z-40 block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1 rounded-xl shadow-sm shadow-slate-400'
      >
        <img
          src={img}
          alt='Product Image'
          className='transform transition ease-out group-hover:scale-110 rounded-xl'
        />
        <div className='absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0' />
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <div className='rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-primary group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90'>
            {name}
          </div>
        </div>
      </Link>
    </>
  );
};

// <Card
//   className="max-w-sm overflow-hidden rounded-md"
//   imgSrc={img}
//   imgSize="sm"
//   aria-description="imagen de categoria"
// >
//   <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
//     <Heart size={20} weight="bold" color="white" />
//   </Card.Container>
//   <Card.Container className="p-3">
//     <Card.Container className="flex items-center justify-between"></Card.Container>
//     <Card.Container className="my-1">
//       <Card.Title>{name}</Card.Title>
//     </Card.Container>
//     <Card.Container className="flex w-full items-center justify-start gap-5">
//       <Link to={`/categoria/${id}`} className="w-full">
//         <Button size="sm" type="outlineGray" className="w-full">
//           <span className="pr-2">
//             <MagnifyingGlass size={24} />
//           </span>
//           Ver productos
//         </Button>
//       </Link>
//     </Card.Container>
//   </Card.Container>
// </Card>
