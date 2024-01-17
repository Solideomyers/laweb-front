import { Form } from '@/components';
import { Button, TooltipUi } from '@/components/ui';
import { Tooltip } from 'keep-react';
import React, { useState } from 'react';
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { PiWhatsappLogoFill } from 'react-icons/pi';
import { FaCopy } from 'react-icons/fa6';

export const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopied = (e) => {
    // const textToCopy = '926090440';
    const { id } = e.target;
    navigator.clipboard.writeText(id).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
    e.preventDefault();
  };

  return (
    <section className=' flex flex-col justify-around rounded-2xl w-full px-2 py-2  items-center'>
      <section className='flex flex-col gap-4'>
        <h1 className='font-bold text-text-color text-center text-4xl uppercase'>
          Contacto con Nosotros
        </h1>
        <p className='text-wrap text-sm text-text-color w-full lg:max-w-5xl px-10'>
          ¿Tienes alguna duda? No dudes en contactar con nosotros. Puedes
          hacerlo a través de este formulario o enviando un correo electrónico a
          nuestro departamento de ventas. Te responderemos a la mayor brevedad
          posible y te informaremos de todo lo que necesites saber, ya sea sobre
          nuestros productos, nuestro proceso de venta o cualquier reclamación
          que pudieses te
        </p>
        <div className='size-96 flex flex-col bg-[url("/src/assets/slide2.jpg")] bg-cover bg-no-repeat bg-center]'>
          <h1 className='size-48 uppercase font-bold text-white'>
            El Colchón de tus sueños espera por ti
          </h1>
          <Button>VER MAS</Button>
        </div>
      </section>
      <div className=' py-20 rounded-xl flex flex-col gap-4  max-w-screen'>
        <Form />
      </div>
      <div className='flex flex-col items-center py-2 gap-4 rounded-b-xl'>
        <div className=' bg-background-color gap-2 size-48 rounded-xl py-2 px-4 flex flex-col items-center justify-center'>
          <div className='border size-16 px-3 py-3 gap-2 rounded-lg flex flex-col items-center justify-center text-text-color bg-primary-light-color border-contrast-accent-color-dark '>
            <FaMapLocationDot size={35} />
          </div>
          <span className='text-wrap text-base/tight text-text-color whitespace-pre-wrap w-f1ll align-middle text-center'>
            C. Pintora Esperanza Huertas, 15, 13730 Santa Cruz de Mudela, Ciudad
            Real
          </span>
        </div>
        <div className=' bg-background-color gap-2 size-48 overflow-hidden rounded-xl py-2 px-4 flex flex-col items-center justify-center'>
          <div className='border size-16 px-3 py-3 gap-2 rounded-lg flex flex-col items-center justify-center text-text-color bg-primary-light-color border-contrast-accent-color-dark '>
            <FaPhoneVolume size={35} />
          </div>
          <span className='text-wrap text-base/tight text-text-color whitespace-pre-wrap w-f1ll align-middle text-center flex flex-col items-center'>
            Llama a nuestras oficinas y con gusto atenderemos tus requerimientos
            <Tooltip
              trigger='click'
              arrow={false}
              placement='bottom'
              content='Copiado'
              animation='duration-100'
            >
              <Tooltip
                trigger='hover'
                content='Click para Copiar'
                animation='duration-100'
              >
                <a
                  href='#'
                  id='926090440'
                  onClick={handleCopied}
                  className='inline-flex gap-2 items-center w-full text-primary text-center font-bold'
                >
                  <FaCopy />
                  926090440
                </a>
              </Tooltip>
            </Tooltip>
          </span>
        </div>
        <div className=' bg-background-color gap-2 size-48 rounded-xl py-2 px-4 flex flex-col items-center justify-center'>
          <div className='border size-16 px-3 py-3 gap-2 rounded-lg flex flex-col items-center justify-center text-text-color bg-primary-light-color border-contrast-accent-color-dark '>
            <PiWhatsappLogoFill size={35} />
          </div>
          <span className='text-wrap text-base/tight text-text-color whitespace-pre-wrap w-f1ll align-middle text-center flex flex-col items-center'>
            Puedes contactarnos vía WhatsApp
            <Tooltip
              trigger='click'
              arrow={false}
              placement='bottom'
              content='Copiado'
              animation='duration-100'
            >
              <Tooltip
                trigger='hover'
                content='Click para Copiar'
                animation='duration-100'
              >
                <a
                  href='#'
                  id='648709325'
                  onClick={handleCopied}
                  className='inline-flex gap-2 items-center w-full text-primary text-center font-bold'
                >
                  <FaCopy />
                  648709325
                </a>
              </Tooltip>
            </Tooltip>
          </span>
        </div>
      </div>
    </section>
  );
};
