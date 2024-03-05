import Card from "@/app/components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getTrendingMovies } from "./api";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  return (
    <>
      <div className="ml-48">
        <div className="flex flex-wrap">
          {trendingMovies.results.map((movies: any) => (
            <Card
              key={movies.id}
              id={movies.id}
              title={movies.title}
              rating={movies.vote_average}
              poster={movies.poster_path}
            />
          ))}
        </div>
        <div className="inline-block">
          <Footer />
        </div>
      </div>
    </>
  );
}
