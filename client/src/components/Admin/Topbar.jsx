import React from "react";
import { motion } from "framer-motion";

const Topbar = ({ user, handleLogout }) => (
  <motion.div
    className="flex justify-end items-center gap-4 mb-6"
    initial="hidden"
    animate="visible"
  >
    <motion.span
      className="text-white outfit font-semibold"
    >
      {user?.name}
    </motion.span>
    <motion.button
      onClick={handleLogout}
      className="bg-white text-black px-4 py-2 rounded shadow-sm hover:bg-red-800 hover:text-white transition-all cursor-pointer outfit font-semibold"
    >
      Logout
    </motion.button>
  </motion.div>
);

export default Topbar;
