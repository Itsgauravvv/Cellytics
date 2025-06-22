import { motion } from "framer-motion";
import { FaFileExcel, FaChartBar, FaRobot, FaHistory } from "react-icons/fa";

const features = [
  { icon: <FaChartBar size={30} />, text: "Generate 2D/3D charts" },
  { icon: <FaFileExcel size={30} />, text: "Upload Excel files" },
  { icon: <FaHistory size={30} />, text: "See upload history" },
  { icon: <FaRobot size={30} />, text: "Access AI-powered insights" },  
];

function Features() {
  return (
    <div className="py-12 px-6 md:px-20 overflow-hidden bg-[#0B0B2B]">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-white inter"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Features
      </motion.h2>

      <motion.div
        className="w-full inter"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-64 bg-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-md backdrop-blur-sm border border-white/20"
            >
              <div className="text-[#00ACC1] mb-4">{feature.icon}</div>
              <p className="text-lg font-medium text-white">{feature.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Features;
