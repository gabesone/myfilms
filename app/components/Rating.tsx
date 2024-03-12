import { RatingProps } from "../types";

const Rating = ({ rating, containerStyles }: RatingProps) => {
  return (
    <p className={containerStyles ? containerStyles : "text-sm text-[#6C7C85]"}>
      Rating:{" "}
      {rating?.toFixed(1).split(".")[1][0] == "0"
        ? rating?.toFixed(0)
        : rating?.toFixed(1)}
      /10
    </p>
  );
};

export default Rating;
