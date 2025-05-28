import React from "react";

export default function Test() {
  return (
    <>
   <div className="group relative flex flex-col bg-[#242824] p-2.5 rounded-md gap-2 max-w-[15em] w-full">
  <div className="relative w-[15em] h-[15em] rounded-sm bg-[#9147ff] overflow-hidden transition duration-200 ease-in-out">
    <img
      src="/path/to/image.jpg"
      alt="Topic"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <span className="absolute inset-0 p-2 text-white text-xl bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
      (Topic)
    </span>
  </div>

  <div className="flex justify-between items-center">
    <div className="flex">
      <div className="flex flex-col justify-center text-white">
        <label className="text-sm">Main Title</label>
        <div
          className="relative w-max h-6 text-xs transition-transform duration-200 preserve-3d [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <label
            className="absolute w-max h-6 flex justify-center items-center uppercase tracking-wide font-bold text-white [transform:translateZ(0.25em)]"
            style={{ transform: "translateZ(0.25em)" }}
          >
            Access the list (Topic)
          </label>
          <label
            className="absolute w-max h-6 flex justify-center items-center uppercase tracking-wide font-bold text-white [transform:rotateX(-90deg)_translateZ(0.25em)]"
            style={{ transform: "rotateX(-90deg) translateZ(0.25em)" }}
          >
            Username-id
          </label>
        </div>
      </div>
    </div>
    <span
      title="Acceder a la lista (Temas)"
      className="text-[#9147ff] flex items-center text-sm opacity-0 cursor-pointer transition-opacity duration-200 hover:underline group-hover:opacity-100"
    >
      Access
    </span>
  </div>
</div>


    </>
  );
}
