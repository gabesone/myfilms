// import React, { useEffect, useState } from "react";

// const PeopleDetails = (id: number) => {
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`../api/fetchPeopleById/${id}`);
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//   });

//   return <div>PeopleDetails</div>;
// };

// export default PeopleDetails;
