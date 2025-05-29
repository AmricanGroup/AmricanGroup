import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <>
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              What Travelers Are Saying About Our Landmarks
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Hear from visitors who have been captivated by Egypt's ancient wonders
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1: Giza Pyramids */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/random/120x120/?egyptian-woman" alt="Profile image" />
                </div>
                <div>
                  <h3 className="font-bold">Amina El-Sayed</h3>
                  <p className="text-sm text-gray-500">@amina.explorer</p>
                </div>
                <div className="ml-auto">
                  {/* Replaced with a more general icon or removed if not relevant */}
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">Visiting the Giza Pyramids was an awe-inspiring experience! The sheer scale and history are breathtaking. A must-see for anyone interested in ancient wonders.</p>
              <div className="flex items-center mt-4 text-gray-500">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                <span className="mr-4">15k</span> {/* Adjusted for larger numbers */}
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2zm-8 12H6v-2h6v2zm6-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </svg>
                <span className="mr-4">2.5k</span>
                <span className="text-sm">2 days ago</span> {/* More recent timestamp */}
              </div>
            </div>

            {/* Testimonial 2: Luxor Temple */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/random/120x120/?male-traveler" alt="Profile image" />
                </div>
                <div>
                  <h3 className="font-bold">David Chen</h3>
                  <p className="text-sm text-gray-500">@ancient_paths</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">Luxor Temple at sunset is pure magic! The illuminated columns and hieroglyphs truly transport you back in time. An unforgettable experience that photos can't capture.</p>
              <div className="flex items-center mt-4 text-gray-500">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                <span className="mr-4">9.8k</span>
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2zm-8 12H6v-2h6v2zm6-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </svg>
                <span className="mr-4">1.8k</span>
                <span className="text-sm">5 days ago</span>
              </div>
            </div>

            {/* Testimonial 3: Valley of the Kings */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/random/120x120/?female-hiker" alt="Profile image" />
                </div>
                <div>
                  <h3 className="font-bold">Sophia Khan</h3>
                  <p className="text-sm text-gray-500">@history_lover</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">The Valley of the Kings is an archaeological marvel. Each tomb tells a story, and the intricate details are astounding. So much history in one place!</p>
              <div className="flex items-center mt-4 text-gray-500">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                <span className="mr-4">12.1k</span>
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2zm-8 12H6v-2h6v2zm6-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </svg>
                <span className="mr-4">2.1k</span>
                <span className="text-sm">1 week ago</span>
              </div>
            </div>

            {/* Testimonial 4: Temple of Hatshepsut */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/random/120x120/?senior-traveler" alt="Profile image" />
                </div>
                <div>
                  <h3 className="font-bold">Robert Davis</h3>
                  <p className="text-sm text-gray-500">@desert_wanderer</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">The architecture of Hatshepsut's Temple is truly unique, blending so beautifully with the cliffs. It's a testament to ancient Egyptian ingenuity and power. Absolutely stunning!</p>
              <div className="flex items-center mt-4 text-gray-500">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                <span className="mr-4">8.5k</span>
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2zm-8 12H6v-2h6v2zm6-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </svg>
                <span className="mr-4">1.2k</span>
                <span className="text-sm">2 weeks ago</span>
              </div>
            </div>

            {/* Testimonial 5: Karnak Temple Complex */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/random/120x120/?young-traveler" alt="Profile image" />
                </div>
                <div>
                  <h3 className="font-bold">Jessica Lee</h3>
                  <p className="text-sm text-gray-500">@world_explorer</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">Karnak is simply massive! The Hypostyle Hall left me speechless. You can spend hours wandering and still not see everything. A true monument to Egyptian power.</p>
              <div className="flex items-center mt-4 text-gray-500">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                <span className="mr-4">11.5k</span>
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2zm-8 12H6v-2h6v2zm6-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </svg>
                <span className="mr-4">2.8k</span>
                <span className="text-sm">3 weeks ago</span>
              </div>
            </div>

            {/* Testimonial 6: Abu Simbel Temples */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/random/120x120/?male-photographer" alt="Profile image" />
                </div>
                <div>
                  <h3 className="font-bold">Omar Hassan</h3>
                  <p className="text-sm text-gray-500">@egyptian_heritage</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">The journey to Abu Simbel was worth every moment. Seeing those colossal statues carved into the rock face is an unparalleled experience. A true engineering marvel!</p>
              <div className="flex items-center mt-4 text-gray-500">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                <span className="mr-4">7.9k</span>
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2zm-8 12H6v-2h6v2zm6-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </svg>
                <span className="mr-4">1.5k</span>
                <span className="text-sm">1 month ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}