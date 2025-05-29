/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import img from "../assets/images/5.jpg";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../api/serachApi";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const { t } = useTranslation();

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
          <Typography
            sx={{ padding: 0, margin: 0, fontFamily: "Changa" }}
            variant="h3"
            gutterBottom
          >
            {t("Welcome to the Land of Civilization Egypt")}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "Changa", margin: "10px 0" }}
          >
            {t("The great people of Egypt warmly welcome you")}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontFamily: "Changa" }}
          >
            {t(
              "We are ready to greet you all year round to explore the most famous tourist attractions Egypt has to offer, known worldwide"
            )}{" "}
            .
          </Typography>
        </div>

        {/* Search box */}
        <div className="bg-white flex px-1 py-1 rounded-full border border-DesertSand overflow-hidden my-5 max-w-md mx-auto">
          <input
            type="text"
            placeholder={t("Search Something")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full outline-none text-black pl-4 text-sm placeholder-black placeholder:p-0.5"
          />
         <button
  type="button"
  onClick={handleSearch}
  className="cursor-pointer bg-PyramidStone hover:bg-PharaohGold transition-all text-white text-sm rounded-full px-5 py-2.5 flex items-center justify-center min-w-[120px]"
>
  {isLoading ? (
    <span className="flex items-center gap-2">
      <svg
        className="animate-spin h-4 w-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
        ></path>
      </svg>
      {t("Searching...")}
    </span>
  ) : (
    t("Search")
  )}
</button>

        </div>
      </section>
    </div>
  );
}

 