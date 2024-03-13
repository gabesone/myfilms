import {
  MovieCardDetailsProps,
  MovieCardProps,
  PeopleCardProps,
} from "../types";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import ImageIcon from "@mui/icons-material/Image";

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

export const PeopleCard = ({
  id,
  name,
  character,
  profile_path,
}: PeopleCardProps) => {
  return (
    <div className="mx-auto">
      <div className="my-4 transition hover:scale-105 duration-300">
        <Link href={"#"}>
          {profile_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={`Photo of ${name}`}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded w-full min-h-[385px] max-h-[385px]"
            />
          ) : (
            <div className="w-full min-h-[385px] bg-gray-600/60 rounded flex items-center justify-center">
              <ImageIcon fontSize="large" />
            </div>
          )}
        </Link>
      </div>
      <div className="w-64">
        <h3 className="">{name}</h3>
        <p className="text-sm text-[#6C7C85]">as {character}</p>
      </div>
    </div>
  );
};

export const MovieCardDetails = ({
  status,
  languages,
  production,
  credits,
  runtime,
  released,
  genres,
  poster,
  overview,
  homepage,
}: MovieCardDetailsProps) => {
  // Get the director of the movie or Tv Show
  const directorArr = credits.crew.filter((cr) => cr.job === "Director");

  return (
    <>
      <div>
        <div className="flex space-x-8 mx-16">
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
                  <div>
                    {directorArr.map((director, index) => (
                      <p key={index}>{director.name}</p>
                    ))}
                  </div>
                  <div>
                    {genres.map((genre, index) => (
                      <p className="inline" key={index}>
                        {genre.name}
                        {genres.length - 1 !== index ? ", " : ""}
                      </p>
                    ))}
                  </div>
                  <p>{status}</p>
                  <div className="">
                    {languages.map((value, index) => (
                      <p className="inline" key={index}>
                        {value.english_name}
                        {languages.length - 1 !== index ? ", " : ""}
                      </p>
                    ))}
                  </div>

                  <div>
                    {production.map((value, index) => (
                      <p className="inline" key={index}>
                        {value.name}
                        {production.length - 1 !== index ? ", " : ""}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Page link of the movie or Tv Show */}
            <div className="mt-8">
              {homepage ? (
                <Link href={homepage} className="hover:to-blue-100">
                  {/* TODO: Add gradient from My Films brand color to LinkIcon */}
                  <LinkIcon
                    className="inline-block p-0 m-0 border-0 hover:text-cyan-900 transition-colors duration-300"
                    fontSize="large"
                  />
                </Link>
              ) : (
                <LinkOffIcon fontSize="large" />
              )}
            </div>
          </div>
        </div>

        {/* Cast */}
        <div className="my-8">
          <div className="mx-16 my-4">
            <h2 className="text-2xl">Cast</h2>
          </div>
          {/* max-w-[106.91rem]  */}
          <div className="flex max-w-[105.96rem] overflow-x-scroll mx-2 overflow-y-hidden">
            <div className="flex ml-14 gap-3 my-4 mr-2">
              {credits.cast.map((ca) => (
                <PeopleCard
                  key={ca.id}
                  id={ca.id}
                  name={ca.name}
                  character={ca.character}
                  profile_path={ca.profile_path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
