import React from "react";
import { Link } from "react-router-dom";

export const Notfound: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-primary">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-secondary px-2 text-sm rounded rotate-12 absolute">
        Pagina no encontrada
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-white group active:text-neutral-900 focus:outline-none focus:ring ">
          <span className="absolute inset-0 rounded-full transition-transform translate-x-0.5 translate-y-0.5 bg-neutral-900 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block rounded-full px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Inicio</Link>
          </span>
        </a>
      </button>
    </section>
  );
};
