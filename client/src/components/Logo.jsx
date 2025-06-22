import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.header
        className="px-14 py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/"><img src="./logo2.png" alt="Cellytics Logo" className="w-20 h-20" /></Link>
      </motion.header>
  )
}

export default Logo
