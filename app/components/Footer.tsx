import React from "react";
import Image from "next/image";
import TMDB from "@/public/tmdb.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-16 bg-[#1A1C20]">
      <div className="">
        <p className="text-gray-500/80">
          Data provided by{" "}
          <Link
            href="https://www.themoviedb.org/"
            target="_blank"
            className="inline-block relative top-1"
          >
            <Image
              src={TMDB}
              alt="TMDB Logo"
              width={0}
              height={0}
              className="w-[48px] h-auto"
            />
          </Link>
        </p>
      </div>
      <div>
        <p className="text-gray-500/80 mt-2">
          This project uses TMDB and the TMDB APIs but is not endorsed,
          certified, or otherwise approved by TMDB.
        </p>
      </div>

      <div>
        <Link href="https://github.com/gabesone">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/gabrielgsena/">
          <LinkedInIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
