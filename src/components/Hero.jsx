/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import img from "../assets/images/4.jpg";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col-reverse justify-start items-start"
      style={{ backgroundImage: `url(${img})` }}
    >
      <section className="p-6 m-6">
        <motion.h1
          className="capitalize text-[16rem] p-0 m-0 text-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Travel
        </motion.h1>

        <motion.p
          className="text-[12rem] p-0 m-0 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Guid <span>:</span> Egypt
        </motion.p>
      </section>
    </div>
  );
}
