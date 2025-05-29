import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import icon from "../assets/images/icon.png"; // Make sure this path is correct and the image exists
 
import About from "../components/About";
import Galleries from "../components/Galleries";

export default function Home() {
 
  return (
    <>
      <Helmet>
        <title>
          Top Tourist Attractions in Egypt | Discover the Land of the Pharaohs
        </title>

        <meta
          name="description"
          content="Explore Egypt's most famous tourist attractions including the Pyramids of Giza, Luxor, Aswan, and the Red Sea. Your ultimate guide to Egypt travel."
        />
        <meta
          name="keywords"
          content="Egypt tourist attractions, Pyramids of Giza, Luxor Temple, Egyptian travel guide, things to do in Egypt, ancient Egypt, Red Sea resorts"
        />
        <meta name="author" content="Egypt Explorer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Top Tourist Attractions in Egypt" />
        <meta
          property="og:description"
          content="Discover the wonders of ancient Egypt. Plan your trip to visit the Great Pyramids, Nile cruises, temples, and more!"
        />
        {/* REPLACE below URL with your actual image URL reachable publicly */}
        <meta
          property="og:image"
          content="https://yourdomain.com/images/egypt-og-image.jpg"
        />
        {/* REPLACE with your real site URL */}
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Explore Egypt's Best Tourist Attractions"
        />
        <meta
          name="twitter:description"
          content="Visit the most iconic places in Egypt — from Cairo to Luxor and the Red Sea coast."
        />
        {/* REPLACE below URL with your actual image URL reachable publicly */}
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/egypt-twitter-image.jpg"
        />

        {/* Favicon: This will work if icon is a valid imported image */}
        <link rel="icon" href={icon} type="image/png" />
        <link rel="shortcut icon" href={icon} type="image/png" />
      </Helmet>

      <Hero />
      <About />
 
      <Galleries />

    </>
  );
}
