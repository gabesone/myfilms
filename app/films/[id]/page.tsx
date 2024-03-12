"use client";

// import React, { useEffect, useState } from "react";
// import { promises } from "stream";
// import { fetchMovieById } from "../../api";
// import Backdrop from "@/app/components/Backdrop";
// import { MovieCardDetails } from "@/app/components/Cards";
// import Footer from "@/app/components/Footer";

// const page = ({ params }: { params: { id: number } }) => {
//   const [movie, setMovie] = useState<any>({});
//   const [active, setActive] = useState("");

//   const id = params.id;

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const data = await fetchMovieById(id);
//       setMovie(data);
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className="ml-48 w-full bg-[#1A1C20]">
//       <Backdrop
//         backdrop={movie.backdrop_path}
//         title={movie.title}
//         description={movie.overview}
//         id={id}
//         rating={movie.vote_average}
//       />

//       <div>
//         <div className="mt-8 mb-16">
//           <p id="overview">nav 1</p>
//           <p id="videos">nav 2</p>
//           <p id="photos">nav 3</p>
//         </div>{" "}
//       </div>

//       {/* Movie or Tv Show Details */}
//       <div>
//         <MovieCardDetails
//           status={movie.status}
//           language={movie.spoken_languages}
//           production={movie.production_companies.map(
//             (company: any) => company.name
//           )}
//           director=""
//           runtime={movie.runtime}
//           released={movie.released_date}
//           genre={movie.genres.map((genre: any) => genre.name)}
//           poster={movie.poster_path}
//         />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default page;

// pages/index.js
import Tab from "@/app/components/Tab";
import { MovieData, TabItem } from "@/app/types";
import React, { useEffect, useState } from "react";
import { fetchMovieById } from "@/app/api";
import { unstable_noStore as noStore } from "next/cache";

const IndexPage = ({ params }: { params: { id: number } }) => {
  noStore();
  const [data, setData] = useState<MovieData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchMovieById(params.id);
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const tabs = [
    { title: "Tab 1", content: "Content of Tab 1" },
    { title: "Tab 2", content: "Content of Tab 2" },
    { title: "Tab 3", content: "Content of Tab 3" },
  ];

  return (
    <div className="ml-48">
      <h1>Tab Example</h1>
      <Tab defaultTab={0} tabs={tabs} />

      <div>{data ? <p>{data.title}</p> : <p>Loading...</p>}</div>
    </div>
  );
};

export default IndexPage;
