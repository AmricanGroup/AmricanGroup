import React from "react";
import icon from "../assets/images/icon.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-gray-700 body-font bg-white mt-5">
      <div className="container px-5 py-12 mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Logo + Description */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900 mb-4">
            <img src={icon} className="w-16 h-16 p-1 rounded-full" alt="icon" />
            <span className="ml-3 text-xl">{t("EgyptTourism")}</span>
          </a>
          <p className="text-2xl  text-DesertSandx  rtl:text-right font-Dancing">
           {t("Discover the timeless wonders of Egypt")} 
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap w-full md:w-3/4 justify-between gap-y-8">
          {/* Column */}
          {[
            {
              title: "Famous Monuments",
              items: [
                "Great Pyramid of Giza",
                "Sphinx of Giza",
                "Karnak Temple",
                "Abu Simbel Temples",
              ],
            },
            {
              title: "Popular Cities",
              items: ["Cairo", "Luxor", "Aswan", "Alexandria"],
            },
            {
              title: "Activities",
              items: [
                "Nile River Cruises",
                "Desert Safaris",
                "Museum Tours",
                "Camel Riding",
              ],
            },
            {
              title: "Useful Info",
              items: [
                "Travel Tips",
                "Visa Info",
                "Local Cuisine",
                "Accommodation",
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 px-2">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 font-Rubik">
                {t(section.title)}
              </h2>
              <nav className="list-none space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a className="text-gray-600 hover:text-PharaohGoldx cursor-pointer  font-Changa">
                      {t(item)}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <p className="text-gray-500  text-center font-Noto text-lg">
           {t("© 2025 EgyptTourism — All Rights Reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
