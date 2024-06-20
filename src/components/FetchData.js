// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setData(res.data);
//         setIsLoading(false);
//         setError(null);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setIsLoading(false);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       {isLoading && <h1>Loading...</h1>}
//       {error && <h1>{error}</h1>}
//       {!isLoading && !error && data.length > 0 ? (
//         data.map((item) => (
//           <div className="author" key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <div className="">
//               <p>{item.title}</p>
//               <p>{item.price}</p>
//               <p>{item.description}</p>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
//                 unde voluptatem, explicabo minus maxime reprehenderit hic ad id
//                 fugit iusto quam, quae minima nostrum voluptatibus saepe
//                 asperiores tempora aliquid debitis.
//               </p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// };

// export default FetchData;
