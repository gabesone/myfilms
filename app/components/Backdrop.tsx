"use client";

import React from "react";
import { HeroProps } from "../types";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Backdrop = ({ backdrop, title, description, rating }: HeroProps) => {
  return (
    <div className="relative w-full shadow-2xl">
      <div className="absolute h-full w-[60%] top-0 left-0 bg-gradient-to-r from-black via-current to-transparent z-10 ">
        <div className="flex flex-col text-[#D5D9DC] py-32 px-8 space-y-4">
          <h2 className="text-4xl">{title}</h2>
          <p className="text-base w-[75%]">{description}</p>
          <p className="text-base w-[70%]">
            {" "}
            Rating:{" "}
            {rating.toFixed(1).split(".")[1][0] == "0"
              ? rating.toFixed(0)
              : rating.toFixed(1)}
            /10
          </p>
          <div className="space-x-4">
            <button className="py-2 transition hover:bg-[#393a3b] bg-[#1A1C20] rounded px-4">
              <div className="inline pr-2">
                <PlayArrowIcon />
              </div>
              Watch Trailer
            </button>
            <button className="py-2 transition hover:bg-[#333536] bg-[#464747] rounded px-4">
              <div className="inline pr-2">
                <InfoIcon />
              </div>
              More Info
            </button>
          </div>
        </div>
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/original${backdrop}`}
        alt={`Backdrop of ${title}`}
        width={0}
        height={0}
        priority
        sizes="100vw"
        className="w-[80%] h-full relative left-[20%]"
      />
      <p className="absolute top-2 left-4 text-white">as</p>
    </div>
  );
};

// box-shadow: inset -350px 0 100px 0 #FFF;
// shadow-[rgba(0,_0,_0,_10)_0px_30px_90px]

export default Backdrop;
