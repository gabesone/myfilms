// pages/api/profile-data.ts
import { NextApiRequest, NextApiResponse } from "next";

// Define the type for profile data
interface ProfileData {
  name: string;
  bio: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileData>
) {
  // Sample profile data
  const profileData: ProfileData = {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  // Simulate a delay to demonstrate loading state
  setTimeout(() => {
    res.status(200).json(profileData);
  }, 1000); // Delay of 1 second
}
