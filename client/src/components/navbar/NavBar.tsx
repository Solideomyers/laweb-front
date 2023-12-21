"use client";
import { Button, Navbar } from "keep-react";
import { Heart, ShoppingCart, User } from "phosphor-react";
import logo from "../../assets/logo_gris.png";
import { ComboBoxUi } from "../ui";
import { useGetCategoriasQuery } from "@/redux";
import { useEffect, useState } from "react";

interface Categoria {
  id: number;
  name: string;
  descripcion: string;
}

export const NavBar: React.FC = () => {
  const { data: categorias, isLoading, error } = useGetCategoriasQuery("");
  const [isCat, setIsCat] = useState<Categoria[]>([]);
  useEffect(() => {
    if (categorias) setIsCat(categorias?.data);
  }, []);

  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        {/* logo */}
        <Navbar.Brand>
          <img src={logo} alt="keep" width="100" height="40" />
        </Navbar.Brand>
        {/* barra de busqueda */}
        <Navbar.Container
          tag="ul"
          className="lg:flex items-center justify-between z-50"
        >
          <ComboBoxUi data={isCat} />
        </Navbar.Container>
        {/* menu desplegable */}
        <Navbar.Collapse
          className=" backdrop-blur-xl backdrop-filter bg-white bg-opacity-80"
          collapseType="sidebar"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>
        {/* iconos */}
        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link
              icon={<User size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<Heart size={20} color="#444" />}
              iconAnimation={false}
            />
          </Navbar.Container>

          <Button className="hidden lg:flex" size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="ml-1 text-metal-600">Cart $0.00</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
