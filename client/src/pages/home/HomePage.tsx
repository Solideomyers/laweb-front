import { Categorias, Hero, ProductosSlide, Testimonials } from '@/components';

export const HomePage: React.FC = () => {
  return (
    <section className='mx-auto py-2 grid grid-cols-3 gap-y-2 '>
      <header className='col-span-3'>
        <Hero />
      </header>
      <main className='grid col-span-4 grid-flow-rows-dense place-items-center overflow-hidden'>
        <ProductosSlide />
        <Categorias />
        <Testimonials />
      </main>
    </section>
  );
};
