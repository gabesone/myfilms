// const fetchPeopleById = async (id: string) => {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const result = response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log("Error fetching people by id:", error);
//     throw error;
//   }
// };

// pages/api/proxy.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract the ID from the request parameters
    const { id } = req.query;

    // Forward the request to the external API with the ID
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}`, {
      headers: {
        // Add any necessary headers here, including your API token
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from external API");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
