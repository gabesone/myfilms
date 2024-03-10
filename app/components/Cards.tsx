import { MovieCardDetailsProps, MovieCardProps } from "../types";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";

export const MovieCard = ({ id, title, rating, poster }: MovieCardProps) => {
  return (
    <div className="mx-auto m-8 px-4">
      <div
        key={id}
        className="mt-8 mb-4 h-96 rounded transition ease-in-out delay-75 hover:scale-105 duration-500 cursor-pointer"
      >
        <Link href={`/films/${id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
            width={0}
            height={0}
            sizes="50vw"
            className="w-[256px] h-auto rounded"
          />
        </Link>
      </div>
      <div className="w-64 break-words">
        <h3 className="text-[#D5D9DC] text-lg">{title}</h3>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export const TvCard = () => {
  return <div>Cards</div>;
};

export const PeopleCard = () => {};

export const MovieCardDetails = ({
  status,
  language,
  production,
  director,
  runtime,
  released,
  genre,
  poster,
}: MovieCardDetailsProps) => {
  return (
    <>
      <div>
        <div className="mt-8 mb-16">
          <p>nav 1</p>
          <p>nav 2</p>
          <p>nav 3</p>
        </div>{" "}
        {/* Poster */}
        <div className="w-[350px] h-full">
          {
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt={`Poster of ${""}`}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded w-[350px] h-[500px]"
            />
          }
        </div>
        {/* Movie or Tv Show Details */}
        <div className="inline-block">
          <div className="">
            <div className="">
              {" "}
              <h2>Storyline</h2>
              <p></p>
            </div>

            {/* Details */}
            <div className="">
              <div className="text-[#D5D9DC]">
                <p>Genre</p>
                <p>{genre}</p>
                <p>{released}</p>
                <p>{runtime}min</p>
                <p>{director}</p>
                <p>{production}</p>
                <p>{language}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
