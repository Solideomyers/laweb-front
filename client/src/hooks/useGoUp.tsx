import { useEffect, useState } from "react";
import { CaretCircleDoubleUp } from "phosphor-react";
export const useGoUp = () => {
  const [showButton, setShowBtton] = useState(false);

  const handleScroll = () => {
    const shouldShowButton = window.scrollY > window.innerHeight * 0.8;
    setShowBtton(shouldShowButton);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-10 right-4 z-50 rounded-full p-0  text-white text-md  font-bold animate-keep-bounce">
      {showButton && (
        <button
          className="relative py-1 px-1 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md shadow-neutral-900/60 hover:scale-125 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <CaretCircleDoubleUp size={25} />
        </button>
      )}
    </div>
  );
};
