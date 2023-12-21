"use client";
import { Breadcrumb } from "keep-react";
import { ArrowsLeftRight, House } from "phosphor-react";
import { useLocation } from "react-router-dom";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const ruta = location.pathname.split("/");
  const detail = ruta[3];

  return (
    <div className="flex w-full my-4">
      <Breadcrumb
        breadCrumbWithBorder={false}
        aria-label="Default breadcrumb example"
        separatorIcon={<ArrowsLeftRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="/" icon={<House size={24} color="#AFBACA" />}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item href={`/categoria/${ruta[2]}`}>
          Productos
        </Breadcrumb.Item>
        {detail ? (
          <Breadcrumb.Item active="border" href="#">
            Detalle
          </Breadcrumb.Item>
        ) : null}
      </Breadcrumb>
    </div>
  );
};
