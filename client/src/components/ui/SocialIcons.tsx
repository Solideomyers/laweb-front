import React from "react";
import { Link } from "react-router-dom";

export const SocialIcons: React.FC = () => {
  return (
    <>
      <span className="flex py-2 border-gray-200 space-x-2s">
        {/* facebook */}
        <Link
          to={"https://www.facebook.com/webdelcolchon/"}
          target="_blank"
          className="text-gray-500"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5 hover:scale-125 transition-all duration-100 delay-100 ease-in-out hover:text-primary"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        {/* twitter X */}
        <Link
          className="text-gray-500"
          to={"https://twitter.com/LaWebdelColchon"}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 hover:scale-125 transition-all duration-100 delay-100 ease-in-out hover:text-[#252525]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </Link>
        {/* wsp */}
        <Link
          className="text-gray-500"
          to={
            "https://api.whatsapp.com/send?phone=34648709325&text=Solicito%20informaci%C3%B3n%20sobre%20este%20producto:%20Cabecero%20tapizado%20Julie%20para%20cama%20de%2080%20(90%20x%2055%20cms)"
          }
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 hover:scale-125 transition-all duration-100 delay-100 ease-in-out hover:text-[#25D366]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        </Link>
        <Link
          className="text-gray-500"
          to={"https://www.instagram.com/lawebdelcolchon/"}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 hover:scale-125 transition-all duration-100 delay-100 ease-in-out"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </Link>
      </span>
    </>
  );
};
