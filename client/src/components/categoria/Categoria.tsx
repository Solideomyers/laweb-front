"use client";
import { Badge, Button, Card, PlayButton, Progress } from "keep-react";
import { Heart, MagnifyingGlass } from "phosphor-react";
import React from "react";
import img from "../../assets/herosection.jpg";
import { Link } from "react-router-dom";

interface Data {
  name: string;
  id: number;
}

export const Categoria: React.FC<Data> = ({ name, id }) => {
  return (
    <>
      <Card
        className="max-w-sm overflow-hidden rounded-md"
        imgSrc={img}
        imgSize="sm"
        aria-description="imagen de categoria"
      >
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-3">
          <Card.Container className="flex items-center justify-between"></Card.Container>
          <Card.Container className="my-1">
            <Card.Title>{name}</Card.Title>
          </Card.Container>
          <Card.Container className="flex w-full items-center justify-start gap-5">
            <Link to={`/categoria/${id}`} className="w-full">
              <Button size="sm" type="outlineGray" className="w-full">
                <span className="pr-2">
                  <MagnifyingGlass size={24} />
                </span>
                Ver productos
              </Button>
            </Link>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
