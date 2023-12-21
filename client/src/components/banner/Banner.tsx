import React, { useEffect, useMemo, useState } from "react";

export const Banner = () => {
  //
  const prompter = useMemo(
    () => [
      "ENVIOS GRATUITOS",
      "FINANCIA TU COMPRA EN CÓMODOS PLAZOS",
      "OPCIÓN DE SUBIDA Y MONTAJE EN SU DOMICILIO",
      "PRODUCTOS FABRICADOS EN ESPAÑA",
      "FABRICACIÓN PROPIA, MUEBLES HECHOS A MANO",
      "MUEBLES YA MONTADOS Y LISTOS",
      "GARANTÍA CON LA MEJOR SOLUCIÓN PARA TI EN 24 H",
      "ENVIOS EXPRESS CON ENTREGA 24 HORAS",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % prompter.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, prompter.length]);
  //

  return (
    <div className=" flex justify-between w-full h-6 p-4 border-b border-gray-200 bg-primary dark:bg-gray-700 dark:border-gray-600">
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-white dark:text-gray-400">
          <span className="inline-flex p-1 me-3 bg-white rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
            <svg
              className="w-3 h-3 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
            </svg>
            <span className="sr-only">Light bulb</span>
          </span>
          {prompter.map((text, i) => (
            <span
              key={i}
              className={`${
                i === index ? "block" : "hidden"
              } text-center text-sm animate-reveal flex-shrink-0 transition-all delay-200 ease-out`}
            >
              {text.toUpperCase()}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
