// export const details = {
//   images: {
//     base_url: "http://image.tmdb.org/t/p/",
//     secure_base_url: "https://image.tmdb.org/t/p/",
//     backdrop_sizes: ["w300", "w780", "w1280", "original"],
//     logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
//     poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
//     profile_sizes: ["w45", "w185", "h632", "original"],
//     still_sizes: ["w92", "w185", "w300", "original"],
//   },
//   change_keys: [
//     "adult",
//     "air_date",
//     "also_known_as",
//     "alternative_titles",
//     "biography",
//     "birthday",
//     "budget",
//     "cast",
//     "certifications",
//     "character_names",
//     "created_by",
//     "crew",
//     "deathday",
//     "episode",
//     "episode_number",
//     "episode_run_time",
//     "freebase_id",
//     "freebase_mid",
//     "general",
//     "genres",
//     "guest_stars",
//     "homepage",
//     "images",
//     "imdb_id",
//     "languages",
//     "name",
//     "network",
//     "origin_country",
//     "original_name",
//     "original_title",
//     "overview",
//     "parts",
//     "place_of_birth",
//     "plot_keywords",
//     "production_code",
//     "production_companies",
//     "production_countries",
//     "releases",
//     "revenue",
//     "runtime",
//     "season",
//     "season_number",
//     "season_regular",
//     "spoken_languages",
//     "status",
//     "tagline",
//     "title",
//     "translations",
//     "tvdb_id",
//     "tvrage_id",
//     "type",
//     "video",
//     "videos",
//   ],
// };

import { log } from "console";

const options = {
  method: "GET",
  params: {
    api_key: process.env.API_KEY,
  },
};

// .then((response) => response.json())
// .then((response) => console.log(response))
// .catch((err) => console.error(err));

export const getTrendingMovies = async (): Promise<any> => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        cache: "no-cache",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// export const getImagePoster = async (path: string) => {
//   const response = await fetch(`https://image.tmdb.org/t/p/original/${path}`);

//   const result = await response.json();
//   return result;
// }

export const fetchMovieById = async (id: number): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_TOKEN}&append_to_response=credits`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
