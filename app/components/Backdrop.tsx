"use client";

import React from "react";
import { HeroProps } from "../types";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Rating from "./Rating";

const Backdrop = ({ backdrop, title, description, rating, id }: HeroProps) => {
  const pathname = usePathname();

  return (
    <div className="relative w-full h-[720px] shadow-2xl">
      <div className="absolute h-full w-[60%] top-0 left-0 bg-gradient-to-r from-black via-current to-transparent z-10 ">
        <div className="flex flex-col text-[#D5D9DC] h-full py-48 px-8 space-y-4">
          <h2 className="text-4xl">{title}</h2>
          <p className="text-base w-[70%]">{description}</p>
          <Rating rating={rating} containerStyles="text-base w-[70%]" />

          <div className="space-x-4">
            <button className="py-2 transition hover:bg-[#393a3b] bg-[#1A1C20] rounded px-4">
              <div className="inline pr-2">
                <PlayArrowIcon />
              </div>
              Watch Trailer
            </button>
            {pathname === `/films/${id}` ? (
              ""
            ) : (
              <Link href={`/films/${id}`}>
                <button className="py-2 transition hover:bg-[#333536] bg-[#464747] rounded px-4">
                  <div className="inline pr-2">
                    <InfoIcon />
                  </div>
                  More Info
                </button>
              </Link>
            )}
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
        className="w-[80%] h-full relative left-[20%] z-0"
      />
      <p className="absolute top-2 left-4 text-white">as</p>
    </div>
  );
};

// box-shadow: inset -350px 0 100px 0 #FFF;
// shadow-[rgba(0,_0,_0,_10)_0px_30px_90px]

export default Backdrop;
