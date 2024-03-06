import Card from "@/app/components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getTrendingMovies } from "./api";
import Backdrop from "./components/Backdrop";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  const randomNumber = Math.floor(
    Math.random() * trendingMovies.results.length
  );
  let randomMovie = [];
  randomMovie.push(await trendingMovies.results[randomNumber]);

  return (
    <>
      <div className="ml-48 bg-[#1A1C20]">
        {randomMovie.map((movie) => (
          <Backdrop
            key={movie.id}
            backdrop={movie.backdrop_path}
            title={movie.title}
            description={movie.overview}
          />
        ))}

        <div className="flex flex-wrap bg-[#1A1C20] border-b-[1px] border-gray-400/40">
          {trendingMovies!.results.map((movies: any) => (
            <Card
              key={movies.id}
              id={movies.id}
              title={movies.title}
              rating={movies.vote_average}
              poster={movies.poster_path}
            />
          ))}
        </div>
        <div className="inline-block m-8 px-4">
          <Footer />
        </div>
      </div>
    </>
  );
}
