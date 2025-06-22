import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main
      className="flex flex-col md:flex-row items-center justify-between flex-1 px-6 lg:px-20 md:px-10 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/img6.jpg')" }}
    >
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-4xl mt-1 md:text-6xl font-bold text-white outfit">Welcome to Cellytics!</h2>
        <p className="text-2xl md:text-3xl text-white text-lg font-bold outfit">
          Easily upload your Excel files, explore your data through interactive 2D and 3D charts, uncover valuable insights with smart analysis, and download comprehensive reports — all in one powerful, easy-to-use platform.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-gray-900 text-white font-extrabold px-6 py-2 rounded hover:bg-green-500 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-900 text-white font-extrabold px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            Get Started
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/imgdash.png"
          alt="Sample Image"
          className="w-full max-w-md mx-auto"
        />
      </motion.div>
    </main>
  )
}

export default Hero
