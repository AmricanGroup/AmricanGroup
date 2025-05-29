import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import gsap
import image from "../assets/images/3.jpg";
import DownloadIcon from "@mui/icons-material/Download";

export default function About() {
  // Create refs for the elements you want to animate
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaRefs = useRef([]); // For multiple CTA buttons
  const cardRefs = useRef([]); // For multiple info cards
  const imageRef = useRef(null);
  const svgTopRightRef = useRef(null);
  const svgBottomLeftRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP context is used for better cleanup
    // This allows GSAP to automatically kill animations when the component unmounts
    const ctx = gsap.context(() => {
      // Animation for the entire section fading in or sliding up
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      // Animation for the heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      // Animation for the paragraph
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );

      // Animation for the CTA buttons (staggered)
      gsap.fromTo(
        ctaRefs.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.7, stagger: 0.2, ease: "power2.out" }
      );

      // Animation for the info cards (staggered)
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1, stagger: 0.2, ease: "power2.out" }
      );

      // Animation for the image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.8, ease: "power3.out" }
      );

      // Animation for the decorative SVGs
      gsap.fromTo(
        [svgTopRightRef.current, svgBottomLeftRef.current],
        { opacity: 0, scale: 0.5, rotate: -90 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1, delay: 1.2, ease: "back.out(1.7)" }
      );

    }, sectionRef); // <- scope the animations to the sectionRef

    return () => ctx.revert(); // <- revert all animations in this context on component unmount
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div
        ref={sectionRef}  
        className="relative bg-amber-50 flex justify-center text-black h-dvh items-center pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px] mx-auto"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full flex flex-col g-5 px-4 lg:w-5/12">
              <div className="hero-content">
                <h1
                  ref={headingRef} 
                  className="mb-5 text-4xl font-bold !leading-[1.208] text-PharaohGold sm:text-[42px] lg:text-[40px] xl:text-5xl"
                >
                  Discover the Wonders of Egypt
                </h1>
                <p
                  ref={paragraphRef} 
                  className="mb-8 max-w-[480px] text-PyramidStone text-base font-normal leading-relaxed dark:text-dark-6"
                >
                  Explore the majestic pyramids, ancient temples, and
                  breathtaking landscapes that tell the story of thousands of
                  years of civilization.
                </p>
                <ul className="flex flex-wrap gap-2 items-center capitalize">
                  <li>
                    <a
                      ref={el => ctaRefs.current[0] = el} 
                      href="#_"
                      className="relative px-10 py-3 font-medium text-white transition duration-300 bg-PyramidStone rounded-md hover:bg-PharaohGold ease"
                    >
                      <span className="absolute bottom-0 left-0 h-full -ml-2">
                        <svg
                          viewBox="0 0 487 487"
                          className="w-auto h-full opacity-100 object-stretch"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                            fill="#FFF"
                            fillRule="nonzero"
                            fillOpacity=".1"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                        <svg
                          viewBox="0 0 487 487"
                          className="object-cover w-full h-full"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                            fill="#FFF"
                            fillRule="nonzero"
                            fillOpacity=".1"
                          ></path>
                        </svg>
                      </span>
                      <span className="relative"> strat your journy </span>
                    </a>
                  </li>
                  <li>
                    <a
                      ref={el => ctaRefs.current[1] = el} 
                      href="#_"
                      className="relative px-6 py-3 font-bold text-white group"
                    >
                      <span className="absolute rounded-md inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 bg-DesertSandx group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span className="absolute rounded-md inset-0 w-full h-full border-4 border-PharaohGoldx"></span>
                      <span className="relative inline-flex items-center gap-2">
                        <DownloadIcon fontSize="small" />
                        Download Your Guide
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-info my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div
                    ref={el => cardRefs.current[0] = el} 
                    className="bg-white dark:bg-dark-3 rounded-lg shadow-md p-4 flex items-start gap-4 border border-amber-200 transition transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="text-PharaohGold text-2xl">🏺</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Ancient History
                      </h4>
                      <p className="text-sm text-PyramidStone dark:text-dark-6">
                        Egypt boasts over 7,000 years of rich and continuous
                        civilization, influencing the world in science, art, and
                        architecture.
                      </p>
                    </div>
                  </div>

                  <div
                    ref={el => cardRefs.current[1] = el} 
                    className="bg-white dark:bg-dark-3 rounded-lg shadow-md p-4 flex items-start gap-4 border border-amber-200 transition transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="text-PharaohGold text-2xl">🏖️</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Stunning Nature
                      </h4>
                      <p className="text-sm text-PyramidStone dark:text-dark-6">
                        From the golden sands of the Sahara to the crystal
                        waters of the Red Sea, Egypt’s landscapes are a paradise
                        for travelers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    ref={imageRef} 
                    src={image}
                    alt="Egyptian Landmarks"
                    className="max-w-full lg:ml-auto rounded-md "
                  />
                  <span ref={svgBottomLeftRef} className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#D4AF37" />
                    </svg>
                  </span>{" "}
                  <span ref={svgTopRightRef} className="absolute -top-8 -right-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#D4AF37" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#D4AF37" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}