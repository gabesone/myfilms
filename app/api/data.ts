// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.API_KEY; // Replace with your API key from .env.local
  const apiUrl = "https://api.themoviedb.org/3/movie/"; // Replace with your API endpoint
  const id = 54693;
  try {
    const response = await fetch(`${apiUrl}${id}?apiKey=${apiKey}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
