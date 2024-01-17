import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, BarsArrowDownIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';

interface Item {
  name: string;
  id: number;
}
interface Data {
  data: Item[];
}

export const ComboBoxUi: React.FC<Data> = ({ data }) => {
  const [selected, setSelected] = useState<Item>();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (selected) {
      console.log(selected);
      navigate(`/categoria/${selected.id}`);
      setQuery('');
    }
  }, [selected, navigate, setQuery]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && selected) {
      if (navigate && typeof navigate === 'function') {
        navigate(`/categoria/${selected.id}`);
      }
    }
  };

  const filteredPeople =
    query === ''
      ? data
      : data.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='w-72 z-50 mx-2'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <div className='relative w-full border py-1 cursor-default overflow-hidden rounded-full bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
            <Combobox.Input
              className='w-full border-none py-0 pl-3 outline-none pr-10 text-sm leading-5 text-gray-900 focus:ring-0 rounded-full border border-neutral-600'
              displayValue={(person: Item) => person?.name}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Combobox.Button className='absolute inset-y-1 right-1 flex items-center  border border-white rounded-full px-2 py-2 bg-primary text-white font-semibold text-center shadow-sm shadow-neutral-900 focus:shadow-none transition-shadow ease-in-out duration-100'>
              {/* Categorias */}
              <BarsArrowDownIcon
                className='h-5 w-5 text-white'
                aria-hidden='true'
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {filteredPeople.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          <Link to={`/categoria/${person.id}`}>
                            {person.name}
                          </Link>
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
