import { motion } from "framer-motion";

const StatCard = ({ icon: Icon, label, value, color = "text-blue-500", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-gradient-to-br from-white via-white to-gray-100 rounded-2xl shadow-xl p-6 sm:p-8 flex justify-between items-center hover:scale-[1.02] transition-transform duration-300"
  >
    <div className="flex flex-col gap-1">
      <p className="text-sm sm:text-base text-gray-500 font-medium">{label}</p>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">{value}</h2>
    </div>
    
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gray-100 shadow-inner">
      <Icon className={`text-3xl sm:text-4xl ${color}`} />
    </div>
  </motion.div>
);

export default StatCard;
