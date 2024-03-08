import React from "react";
import { promises } from "stream";
import { fetchMovieById } from "../../api";
import Backdrop from "@/app/components/Backdrop";
import { MovieCardDetails } from "@/app/components/Cards";
import Footer from "@/app/components/Footer";

const page = async ({ params }: { params: { id: number } }) => {
  console.log(params);
  const id = params.id;
  const [movie] = await Promise.all([fetchMovieById(id)]);
  return (
    <div className="ml-48 w-full bg-[#1A1C20]">
      <Backdrop
        backdrop={movie.backdrop_path}
        title={movie.title}
        description={movie.overview}
        id={id}
        rating={movie.vote_average}
      />
      {/* Movie or Tv Show Details */}
      <div>
        <MovieCardDetails
          status={movie.status}
          language={movie.spoken_languages[0].name}
          production={movie.production_companies.map(
            (company: any) => company.name
          )}
          director=""
          runtime={movie.runtime}
          released={movie.released_date}
          genre={movie.genres.map((genre: any) => genre.name)}
          poster={movie.poster_path}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
