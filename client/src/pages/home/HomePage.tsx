"use client";
import { Categorias } from "@/components";
import { CarouselUi } from "@/components/ui";

export const HomePage: React.FC = () => {
  return (
    <section className="mx-auto py-2 grid grid-cols-3 gap-y-2 ">
      <div className="col-span-3">
        <CarouselUi />
      </div>
      <div className="col-span-3">
        <Categorias />
      </div>
      {/* <Producto /> */}
    </section>
  );
};
