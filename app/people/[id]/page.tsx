"use client";

import React, { useEffect, useState } from "react";

type Movie = {
  id: string;
  title: string;
};

const page = (id: string) => {
  const [data, setData] = useState<Movie | null>(null);

  // Your client-side component

  useEffect(() => {
    // Your client-side component

    const fetchData = async (id: string) => {
      try {
        const response = await fetch(`/api/proxy?id=${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data); // Handle the fetched data
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(id);
  }, []);

  return <div>{data?.title}</div>;
};

export default page;
