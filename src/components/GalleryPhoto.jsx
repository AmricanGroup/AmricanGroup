import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import imag from "../assets/images/3.jpg";
import imagX from "../assets/images/4.jpg";
import imagz from "../assets/images/6.jpg";
export default function GalleryPhoto({ number }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="bg-white py-5 my-5">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          {number === 1 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div
                onClick={handleClickOpen}
                className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"
              >
                <div
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer font-black"
                  to="cities"
                >
                  <img
                    src={imag}
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Pyramids of Egypt
                  </h3>
                </div>
              </div>

              <div
                onClick={handleClickOpen}
                className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50"
              >
                <a
                  href
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src={imagX}
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Pyramids of Egypt
                  </h3>
                </a>

                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    href
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={imagz}
                      alt
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Pyramids
                    </h3>
                  </a>
                  <a
                    href
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={imagX}
                      alt
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Pyramids
                    </h3>
                  </a>
                </div>
              </div>

              <div
                onClick={handleClickOpen}
                className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col"
              >
                <a
                  href
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={imagX}
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Pyramids
                  </h3>
                </a>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <div
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer font-black"
                  to="cities"
                >
                  <img
                    src={imag}
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Pyramids of Egypt
                  </h3>
                </div>
              </div>
              <div
                onClick={handleClickOpen}
                className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col"
              >
                <a
                  href
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={imagX}
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Pyramids
                  </h3>
                </a>
              </div>
              <div
                onClick={handleClickOpen}
                className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50"
              >
                <a
                  href
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src={imagX}
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Pyramids of Egypt
                  </h3>
                </a>

                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    href
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={imagz}
                      alt
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Pyramids
                    </h3>
                  </a>
                  <a
                    href
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={imagX}
                      alt
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Pyramids
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            "in Progress"
          )}
        </div>
      </section>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 3,
            backgroundColor: "var(--color-DesertSandx)",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
            position: "relative",
          }}
          className="shadow-lg"
          id="customized-dialog-title"
        >
          <div className="flex  items-center">
            Giza Pyramids
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: "50",
                color: "white",
                "&:hover": {
                  color: "#bbb",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>

        <DialogContent dividers sx={{ padding: 3 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div
              style={{
                flex: "1 1 320px",
                minWidth: "280px",
                maxWidth: "600px",
                textAlign: "justify",
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "700" }}>
                Pyramids of Egypt
              </Typography>
             <Typography variant="body1" gutterBottom sx={{ lineHeight: 1.6 }}>
  Egypt is the land of ancient wonders and timeless civilization. Home to one of the
  oldest cultures in human history, it proudly showcases its magnificent heritage through
  the majestic pyramids, the timeless Nile River, and the breathtaking temples of Luxor
  and Aswan. From the vibrant streets of Cairo to the peaceful desert landscapes,
  every corner of Egypt tells a story. Visitors are welcomed with warm hospitality and a
  rich cultural experience that leaves a lasting impression on the heart.
</Typography>

            </div>

            <div
              style={{
                flex: "1 1 320px",
                minWidth: "280px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={imag}
                alt="Giza Pyramids"
                style={{
                  maxWidth: "100%",
                  maxHeight: "300px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <Divider sx={{ my: 3 }} />

          <div className="flex justify-center gap-5 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877f2] text-white hover:bg-[#145dbf] transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1da1f2] text-white hover:bg-[#0d95e8] transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff0000] text-white hover:bg-[#cc0000] transition-colors duration-300"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Link
            to="TouristLandmark"
            class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl   transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <div class="relative z-10 flex items-center space-x-2">
                <span class="transition-all duration-500 group-hover:translate-x-1">
                  Let's get started
                </span>
                <svg
                  class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
}
