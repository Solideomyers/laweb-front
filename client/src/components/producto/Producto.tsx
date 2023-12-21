"use client";
import { Badge, Button, Card, PlayButton, Progress } from "keep-react";
import { Heart, ShoppingCart, MagnifyingGlass } from "phosphor-react";
import React from "react";
import img from "../../assets/herosection.jpg";
import { Link } from "react-router-dom";
interface Data {
  price: number;
  name: string;
  description: string;
  id: string;
  idp: number;
  offer: boolean;
}

export const Producto: React.FC<Data> = ({
  price,
  name,
  idp,
  id,
  offer,
  description,
}) => {
  // para tomar el primer parrafo de la descripcion
  const indexDescription = description.indexOf(".");
  const textDescription = description.slice(0, indexDescription + 1);
  return (
    <>
      <Card
        className="max-w-sm h-[400px] overflow-hidden rounded-md hover:shadow-lg animate-reveal transition-all ease-in-out duration-300"
        imgSrc={img}
        imgSize="md"
      >
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge
              size="xs"
              colorType="light"
              color={`${offer ? "error" : "gray"}`}
            >
              {offer ? "Oferta" : "Actualizado"}
            </Badge>
            <Card.Title>{price}$</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>{name}</Card.Title>
            <Card.Description>
              <span
                dangerouslySetInnerHTML={{ __html: textDescription }}
                className="grid grid-cols-1 grid-rows-1 font-light text-base whitespace-pre-wrap truncate overflow-hidden h-[60px] "
              />
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-between gap-5">
            <Link to={`/producto/${id}`}>
              <Button size="sm" type="outlineGray">
                <span className="pr-2">
                  <ShoppingCart size={24} />
                </span>
                Añadir
              </Button>
            </Link>
            <Link to={`/categoria/${id}/producto/${idp}`}>
              <Button
                size="sm"
                type={"linkGray"}
                className="bg-primary text-white border border-neutral-900/20"
              >
                <span className="pr-2">
                  <MagnifyingGlass size={24} />
                </span>
                Detalle
              </Button>
            </Link>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
