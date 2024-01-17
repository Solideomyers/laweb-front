import React, { useRef } from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tooltip?: string;
}

export const TooltipUi: React.FC<Props> = ({ children, tooltip, ...props }) => {
  const tooltipRef = useRef(null);
  const container = useRef(null);
  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const rct = container.current.getBoundingClientRect();
        // console.log(rct.left);
        // console.log(tooltipRef.current.style.left);
        tooltipRef.current.style.left = clientX - rct.left + "px";
      }}
      className="group relative inline-block transition-all duration-100 delay-100 ease-in-out"
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="invisible px-2 py-4 absolute group-hover:visible opacity-0 group-hover:opacity-100 transition border-2 shadow-neutral-100 shadow-sm border-slate-900 bg-secondary  text-slate-800/80 rounded-xl top-full mt-1 whitespace-wrap"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};
