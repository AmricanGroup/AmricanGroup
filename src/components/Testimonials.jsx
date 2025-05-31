import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img from "../assets/images/11.jpg";
 

const testimonials = [
  {
    name: "Amina El-Sayed",
    username: "@amina.explorer",
    text: "Visiting the Giza Pyramids was an awe-inspiring experience! The sheer scale and history are breathtaking. A must-see for anyone interested in ancient wonders.",
    image: {img},
    likes: "15k",
    comments: "2.5k",
    time: "2 days ago",
  },
  {
    name: "Omar Hossam",
    username: "@omar.travels",
    text: "The temples in Luxor left me speechless. The artistry and magnitude are incredible!",
    image: "https://source.unsplash.com/random/120x120/?egyptian-man",
    likes: "10k",
    comments: "1.8k",
    time: "3 days ago",
  },
  {
    name: "Sarah Mahmoud",
    username: "@sarah.adventures",
    text: "Aswan's beauty is underrated. A boat ride on the Nile at sunset was pure magic.",
    image: "https://source.unsplash.com/random/120x120/?egyptian-girl",
    likes: "8k",
    comments: "1.2k",
    time: "5 days ago",
  },
];

export default function Testimonials() {
  return (
  <div
    className="py-32 bg-gray-300 my-5"
    style={{
      backgroundImage: `url(${img})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
  >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            What Travelers Are Saying About Our Landmarks
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white">
            Hear from visitors who have been captivated by Egypt's ancient wonders
          </p>
        </div>
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-6 bg-white rounded-lg shadow-md transition-transform">
                <div className="flex items-start mb-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={img}
                    alt={item.name}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.username}</p>
                  </div>
                  <div className="ml-auto text-yellow-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700">{item.text}</p>
                <div className="flex items-center mt-4 text-gray-500 text-sm">
                  <span className="flex items-center mr-4">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    {item.likes}
                  </span>
                  <span className="flex items-center mr-4">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2zm-8 12H6v-2h6v2zm6-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    {item.comments}
                  </span>
                  <span>{item.time}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
