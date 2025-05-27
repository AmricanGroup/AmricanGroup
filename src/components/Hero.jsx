// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import img from "../assets/images/5.jpg";
// import Typography from '@mui/material/Typography';
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { searchApi } from "../api/serachApi";

// export default function Hero() {
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["search", query],
//     queryFn: () => searchApi(query),
//     enabled: !!query,
//   });

//   const handleSearch = () => {
//     if (search.trim() !== "") {
//       setQuery(search.trim());
//     }
//   };

//   console.log(data?.organic_results);

//   return (
//     <div
//       className="relative h-screen bg-cover bg-center flex justify-center items-center"
//       style={{ backgroundImage: `url(${img})` }}
//     >
//       {/* Black overlay */}
//       <div className="absolute inset-0 bg-black opacity-30"></div>

//       {/* Content */}
//       <section className="relative p-6 m-6 sm:p-8 sm:m-8 md:p-12 md:m-12 text-white z-10 w-full max-w-xl">
//         <div className="text-center">
//           <h2 className="text-amber-400">Explore Egypt</h2>
//           <Typography sx={{ padding: 0, margin: 0 }} variant="h3" gutterBottom>
//             Welcome to the Land of Civilization — Egypt
//           </Typography>
//           <Typography variant="h6" gutterBottom>
//             The great people of Egypt warmly welcome you.
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             We are ready to greet you all year round to explore the most famous tourist attractions Egypt has to offer, known worldwide.
//           </Typography>
//         </div>

//         {/* Search box */}
//         <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden my-5 max-w-md mx-auto">
//           <input
//             type="text"
//             placeholder="Search Something..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             onKeyDown={(e) => {
//   if (e.key === 'Enter') handleSearch();
// }}
//             className="w-full outline-none text-black pl-4 text-sm placeholder-black"
//           />
//           <button
//             type="button"
            
//             onClick={handleSearch}
//             className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
//           >
//             Search
//           </button>
//         </div>

//         {/* Loading and error states */}
//         {isLoading && <p className="text-center text-white">Loading...</p>}
//         {error && <p className="text-center text-red-500">Error fetching results.</p>}

        
//       </section>
//     </div>
//   );
// }






/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import img from "../assets/images/5.jpg";
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../api/serachApi";

export default function Hero() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchApi(query),
    enabled: !!query, // Run only when query is not empty
  });

  const handleSearch = () => {
    if (search.trim() !== "") {
      setQuery(search.trim());
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
 
      {/* Content */}
      <section className="relative p-6 m-6 sm:p-8 sm:m-8 md:p-12 md:m-12 text-white z-10 w-full ">
        <div className="text-center ">
        
          <Typography sx={{ padding: 0, margin: 0  }}   variant="h3" gutterBottom>
            Welcome to the Land of Civilization Egypt
          </Typography>
          <Typography variant="h6" gutterBottom>
            The great people of Egypt warmly welcome you.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            We are ready to greet you all year round to explore the most famous tourist attractions Egypt has to offer, known worldwide.
          </Typography>
        </div>

        {/* Search box */}
        <div className="bg-white flex px-1 py-1 rounded-full border border-PharaohGold overflow-hidden my-5 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search Something..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            className="w-full outline-none text-black pl-4 text-sm placeholder-black"
          />
          <button type="button"onClick={handleSearch}  className="cursor-pointer bg-PyramidStone hover:bg-PharaohGold transition-all text-white text-sm rounded-full px-5 py-2.5"
          >
            Search
          </button>
        </div>

        {/* Loading and error states */}
        {isLoading && <p className="text-center text-white">Loading...</p>}
        {error && <p className="text-center text-red-500">Error fetching results.</p>}

      
      </section>
    </div>
  );
}
