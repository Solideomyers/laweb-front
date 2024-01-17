import React from 'react'

export const Testimonial = () => {
  return (
    <figure className='flex flex-col border items-center justify-center p-8 text-center bg-gray-100 hover:bg-white transition-all ease-in-out delay-150 duration-150 border-gray-200 rounded-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700'>
      <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
          Efficient Collaborating
        </h3>
        <p className='my-4'>
          You have many examples that can be used to create a fast prototype for
          your team."
        </p>
      </blockquote>
      <figcaption className='flex items-center justify-center '>
        <img
          className='rounded-full w-9 h-9'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
          alt='profile picture'
        />
        <div className='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>
          <div>Joseph McFall</div>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            CTO at Google
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
