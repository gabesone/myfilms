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
  languages,
  production,
  director,
  runtime,
  released,
  genres,
  poster,
  overview,
}: MovieCardDetailsProps) => {
  return (
    <>
      {console.log(languages)}
      <div className="flex space-x-8 mx-16 ">
        {/* Poster */}
        <div className="">
          {
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt={`Poster of ${""}`}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded min-w-[350px] min-h-[500px]"
            />
          }
        </div>
        {/* Movie or Tv Show Details */}
        <div>
          <div className="w-[70%]">
            <div className="space-y-2">
              <h2 className="text-2xl">Storyline</h2>
              <p>{overview}</p>
            </div>

            {/* Details */}
            <div className="mt-8 flex space-x-4 ">
              <div className="text-[#D5D9DC] space-y-2">
                <p>Released</p>
                <p>Runtime</p>
                <p>Director</p>
                <p>Genre</p>
                <p>Status</p>
                <p>Language</p>
                <p>Production</p>
              </div>
              <div className="space-y-2">
                <p>{released}</p>
                <p>{runtime}min</p>
                <p>{director}</p>
                <div>
                  {genres.map((genre, index) => (
                    <p className="inline">
                      {genre.name}
                      {genres.length - 1 !== index ? ", " : ""}
                    </p>
                  ))}
                </div>
                <p>{status}</p>
                <div className="">
                  {languages.map((value, index) => (
                    <p className="inline">
                      {value.english_name}
                      {languages.length - 1 !== index ? ", " : ""}
                    </p>
                  ))}
                </div>

                <div>
                  {production.map((value, index) => (
                    <p className="inline">
                      {value.name}
                      {production.length - 1 !== index ? ", " : ""}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
