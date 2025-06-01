import React from "react";
import img from "../assets/images/3.jpg"; // Replace with a museum-related image
import { Link } from "react-router-dom";
 
import { useTranslation } from "react-i18next";

export default function BlogCard() {
  const { t } = useTranslation();
  return (
    <>
      <section className="flex flex-col justify-center max-w-6xl px-4 py-10 mx-auto sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-Rubik text-PyramidStone ">
            {t("Latest News from Egypt")}
          </h2>
          <Link
            to="blog"
            className="text-xl font-black capitalize border-b border-transparent hover:border-current text-PharaohGold font-Changa self-start sm:self-auto"
          >
            {t("View All Articles")}
          </Link>
        </div>

        {/* Articles grid */}
        <div className="flex flex-wrap -mx-4 ">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-PyramidStone  shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-PharaohGold">
              {/* Image */}
              <img
                src={img}
                alt="Grand Egyptian Museum"
                className="object-cover object-center w-full h-48 sm:h-56 lg:h-64"
              />
              {/* Content */}
              <div className="flex flex-col justify-between flex-grow px-4 py-6 ">
                <div>
                  <span className="inline-block mb-4 text-xl font-bold capitalize border-b-2   text-PyramidStone cursor-default font-Dancing">
                    {t("Egyptian Heritage")}
                  </span>

                  <Link
                    to="blogContent"
                    className="block mb-4 text-2xl font-black font-Changa leading-tight hover:underline text-PharaohGoldx "
                  >
                    {t("Grand Egyptian Museum Opens Its Doors to the Public")}
                  </Link>

                  <p className="mb-4 text-PharaohGoldx  text-sm md:text-base font-Rubik">
                    {t(
                      "After years of anticipation, Egypt has officially opened the Grand Egyptian Museum—the world's largest museum dedicated to a single civilization"
                    )}
                    .
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-300">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="tags flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-md font-bold text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Culture")}
                      </span>
                      <span className="px-2 py-1 text-md font-bold  text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Antiquities")}
                      </span>
                      <span className="px-2 py-1 text-md font-bold  text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Egypt")}
                      </span>
                    </div>
                    <div className="text-gray-600 font-Rubik text-sm   pt-2">
                      June 1, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-PyramidStone  shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-PharaohGold">
              {/* Image */}
              <img
                src={img}
                alt="Grand Egyptian Museum"
                className="object-cover object-center w-full h-48 sm:h-56 lg:h-64"
              />
              {/* Content */}
              <div className="flex flex-col justify-between flex-grow px-4 py-6 ">
                <div>
                  <span className="inline-block mb-4 text-xl font-bold capitalize border-b-2   text-PyramidStone cursor-default font-Dancing">
                    {t("Egyptian Heritage")}
                  </span>

                  <Link
                    to="blogContent"
                    className="block mb-4 text-2xl font-black font-Changa leading-tight hover:underline text-PharaohGoldx "
                  >
                    {t("Grand Egyptian Museum Opens Its Doors to the Public")}
                  </Link>

                  <p className="mb-4 text-PharaohGoldx  text-sm md:text-base font-Rubik">
                    {t(
                      "After years of anticipation, Egypt has officially opened the Grand Egyptian Museum—the world's largest museum dedicated to a single civilization"
                    )}
                    .
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-300">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="tags flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-md font-bold text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Culture")}
                      </span>
                      <span className="px-2 py-1 text-md font-bold  text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Antiquities")}
                      </span>
                      <span className="px-2 py-1 text-md font-bold  text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Egypt")}
                      </span>
                    </div>
                    <div className="text-gray-600 font-Rubik text-sm   pt-2">
                      June 1, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-PyramidStone  shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-PharaohGold">
              {/* Image */}
              <img
                src={img}
                alt="Grand Egyptian Museum"
                className="object-cover object-center w-full h-48 sm:h-56 lg:h-64"
              />
              {/* Content */}
              <div className="flex flex-col justify-between flex-grow px-4 py-6 ">
                <div>
                  <span className="inline-block mb-4 text-xl font-bold capitalize border-b-2   text-PyramidStone cursor-default font-Dancing">
                    {t("Egyptian Heritage")}
                  </span>

                  <Link
                    to="blogContent"
                    className="block mb-4 text-2xl font-black font-Changa leading-tight hover:underline text-PharaohGoldx "
                  >
                    {t("Grand Egyptian Museum Opens Its Doors to the Public")}
                  </Link>

                  <p className="mb-4 text-PharaohGoldx  text-sm md:text-base font-Rubik">
                    {t(
                      "After years of anticipation, Egypt has officially opened the Grand Egyptian Museum—the world's largest museum dedicated to a single civilization"
                    )}
                    .
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-300">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="tags flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-md font-bold text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Culture")}
                      </span>
                      <span className="px-2 py-1 text-md font-bold  text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Antiquities")}
                      </span>
                      <span className="px-2 py-1 text-md font-bold  text-PyramidStone bg-PyramidStone/10 rounded-full">
                        {t("Egypt")}
                      </span>
                    </div>
                    <div className="text-gray-600 font-Rubik text-sm   pt-2">
                      June 1, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
