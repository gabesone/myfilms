import React from "react";
import Image from "next/image";
import { cardProps } from "../types";
import { totalmem } from "os";

const Card = ({ title, id, rating, poster }: cardProps) => {
  return (
    <div className="mx-auto max-w-48 max-h-96 m-8">
      <div
        key={id}
        className="w-48 h-[18rem] mt-8 mb-4 rounded transition ease-in-out delay-75 hover:scale-110 duration-300 cursor-pointer"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
          width={198}
          height={300}
          className="rounded w-auto h-auto"
        />
        {/* <button
          className="bg-[#F48C01] text-[#FBF0E1] w-8 h-8 rounded-full relative left-[10.9rem] -top-10 truncate"
          disabled
        >
          {rating.toFixed(1)}
        </button> */}
      </div>
      <div className="w-48 break-words">
        <h3 className="text-[#D5D9DC] text-lg">{title}</h3>
        <p className="text-sm text-[#6C7C85]">aaaaaaaa</p>
      </div>
      <div> </div>
    </div>
  );
};

export default Card;
