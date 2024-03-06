"use client";

import React from "react";
import Image from "next/image";
import { CardProps } from "../types";
import { totalmem } from "os";

// w-48 h-[18rem]
// max-w-48 max-h-96

const Card = ({ title, id, rating, poster }: CardProps) => {
  return (
    <div className="mx-auto m-8 px-4">
      <div
        key={id}
        className="mt-8 mb-4 h-96 rounded transition ease-in-out delay-75 hover:scale-105 duration-500 cursor-pointer"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
          width={0}
          height={0}
          sizes="50vw"
          className="w-[256px] h-auto rounded"
        />
      </div>
      <div className="w-64 break-words">
        <h3 className="text-[#D5D9DC] text-lg">{title}</h3>
        <p className="text-sm text-[#6C7C85]">
          Rating:{" "}
          {rating.toFixed(1).split(".")[1][0] == "0"
            ? rating.toFixed(0)
            : rating.toFixed(1)}
          /10
        </p>
      </div>
      <div> </div>
    </div>
  );
};

export default Card;
