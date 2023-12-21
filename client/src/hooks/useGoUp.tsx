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
          className="text-white bg-primary py-1 px-1 shadow-sm rounded-full hover:scale-125 transform-gpu transition-transform ease-in-out duration-104 delay-104"
          onClick={() => window.scrollTo(0, 0)}
        >
          <CaretCircleDoubleUp size={25} />
        </button>
      )}
    </div>
  );
};
