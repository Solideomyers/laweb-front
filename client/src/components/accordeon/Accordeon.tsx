'use client';
import { Accordion } from 'keep-react';
import { Plus } from 'phosphor-react';
import React, { ReactEventHandler, useState } from 'react';
interface Description extends React.HTMLAttributes<HTMLSpanElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const Accordeon: React.FC<Description> = ({
  title,
  description,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      aria-description='collapse'
      className='w-full max-w-sm sm:max-w-lg lg:max-w-6xl mt-4 rounded-t-xl bg-white'
    >
      <h2 aria-description='accordion-collapse-heading-1'>
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right  border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 ${
            isOpen ? 'text-white !bg-primary' : 'text-gray-500'
          }  transition-colors ease-in-out duration-100 delay-100 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          data-accordion-target='#accordion-collapse-body-1'
          aria-expanded='true'
          aria-controls='accordion-collapse-body-1'
        >
          <span className='flex gap-2 items-center '>
            {icon}
            {title}
          </span>
          <svg
            data-accordion-icon
            className='w-3 h-3 rotate-180 shrink-0'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5 5 1 1 5'
            />
          </svg>
        </button>
      </h2>
      {isOpen ? (
        <div
          id='accordion-collapse-body-1'
          aria-labelledby='accordion-collapse-heading-1'
          className='transition-all ease-in-out delay-200 duration-200'
        >
          <div className='transition-transform ease-in-out  animate-fadeIn p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className='whitespace-pre-wrap font-light mb-2 text-gray-500 dark:text-gray-400'
            />

            {/* <!-- Nested accordion --> */}
            {/* <div id='accordion-nested-collapse' data-accordion='collapse'>
              <h2 id='accordion-nested-collapse-heading-1'>
                <button
                  type='button'
                  className='flex items-center justify-between w-full p-5 rounded-t-xl font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
                  data-accordion-target='#accordion-nested-collapse-body-1'
                  aria-expanded='false'
                  aria-controls='accordion-nested-collapse-body-1'
                >
                  <span>Open source</span>
                  <svg
                    data-accordion-icon
                    className='w-3 h-3 rotate-180 shrink-0'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5 5 1 1 5'
                    />
                  </svg>
                </button>
              </h2>
              <div
                id='accordion-nested-collapse-body-1'
                className='hidden'
                aria-labelledby='accordion-nested-collapse-heading-1'
              >
                <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700'>
                  <p className='text-gray-500 dark:text-gray-400'>
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product.
                  </p>
                </div>
              </div>
              <h2 id='accordion-nested-collapse-heading-2'>
                <button
                  type='button'
                  className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
                  data-accordion-target='#accordion-nested-collapse-body-2'
                  aria-expanded='false'
                  aria-controls='accordion-nested-collapse-body-2'
                >
                  <span>Architecture</span>
                  <svg
                    data-accordion-icon
                    className='w-3 h-3 rotate-180 shrink-0'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5 5 1 1 5'
                    />
                  </svg>
                </button>
              </h2>
              <div
                id='accordion-nested-collapse-body-2'
                className='hidden'
                aria-labelledby='accordion-nested-collapse-heading-2'
              >
                <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700'>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Another difference is that Flowbite relies on smaller and
                    standalone components, whereas Tailwind UI offers sections
                    of pages.
                  </p>
                </div>
              </div>
              <h2 id='accordion-nested-collapse-heading-3'>
                <button
                  type='button'
                  className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
                  data-accordion-target='#accordion-nested-collapse-body-3'
                  aria-expanded='false'
                  aria-controls='accordion-nested-collapse-body-3'
                >
                  <span>Can I use both?</span>
                  <svg
                    data-accordion-icon
                    className='w-3 h-3 rotate-180 shrink-0'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5 5 1 1 5'
                    />
                  </svg>
                </button>
              </h2>
              <div
                id='accordion-nested-collapse-body-3'
                className='hidden'
                aria-labelledby='accordion-nested-collapse-heading-3'
              >
                <div className='p-5 border border-gray-200 dark:border-gray-700'>
                  <p className='mb-2 text-gray-500 dark:text-gray-400'>
                    We actually recommend using both Flowbite, Flowbite Pro, and
                    even Tailwind UI as there is no technical reason stopping
                    you from using the best of two worlds.
                  </p>
                  <p className='mb-2 text-gray-500 dark:text-gray-400'>
                    Learn more about these technologies:
                  </p>
                  <ul className='ps-5 text-gray-500 list-disc dark:text-gray-400'>
                    <li>
                      <a
                        href='https://flowbite.com/pro/'
                        className='text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://tailwindui.com/'
                        rel='nofollow'
                        className='text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <!-- End: Nested accordion --> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};
