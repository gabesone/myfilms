import Card from "@/app/components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getTrendingMovies } from "./api";
import Backdrop from "./components/Backdrop";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  const randomScenario = () => {
    let randomMovie = [];

    const randomNumber = Math.floor(
      Math.random() * trendingMovies.results.length
    );

    randomMovie.push(trendingMovies.results[randomNumber]);

    return randomMovie;
  };

  let randomB = randomScenario();

  return (
    <>
      {/* Show a random backdrop of a movie on theater */}
      <div className="ml-48 bg-[#1A1C20]">
        {randomB.map((movie) => (
          <Backdrop
            key={movie.id}
            backdrop={movie.backdrop_path}
            title={movie.title}
            description={movie.overview}
          />
        ))}

        {/* Display a list of movies on theater */}
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
