// "use client";

// import React, { useState } from "react";
// // import "./Carousel.css"; // You'll need to create this CSS file for styling

// interface CarouselProps {
//   images: string[]; // Array of image URLs
// }

// const CardCarousel: React.FC<CarouselProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const imagesS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const goToItem = (index: number) => {
//     setCurrentIndex(index);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {imagesS?.map((imageUrl, index) => (
//           <div key={index} className="flex w-full ">
//             <img
//               src={imageUrl}
//               alt={`Image ${index + 1}`}
//               className="w-full h-auto"
//             />
//           </div>
//         ))}
//       </div>
//       <button className="prev-button" onClick={goToPrev}>
//         &lt;
//       </button>
//       <button className="next-button" onClick={goToNext}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default CardCarousel;
