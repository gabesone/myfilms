import React, { useState } from "react";
import MyFilmsLogo from "@/public/my-films-logo.svg";
import Image from "next/image";
import { genres } from "../constants";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="fixed min-w-48 max-w-48 h-full overflow-hidden border-r-[1px] border-gray-400/40 bg-black">
      <div>
        <Link href="/" aria-label="Home">
          {" "}
          <Image
            src={MyFilmsLogo}
            alt="My Films Logo"
            className="px-4 py-8 inline-block"
            priority
          />
        </Link>
      </div>
      <div className="flex items-center justify-center text-[#6D7479]">
        <SearchIcon fontSize="large" />
      </div>
      <div className="mt-8">
        <ul className="space-y-1">
          {genres.map((genre, index) => {
            return (
              <li key={index}>
                <Link
                  href="#"
                  className={`block px-8 text-lg font-medium text-[#6D7479] hover:bg-[#2C3C46] `}
                >
                  {genre}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
