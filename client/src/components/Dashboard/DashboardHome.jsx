import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ChartRenderer from "../useranalyze/ChartRenderer";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function DashboardHome() {
  const { user, token } = useSelector((state) => state.auth);
  const [pinnedCharts, setPinnedCharts] = useState([]);
  const { t, i18n } = useTranslation();

  const handleUnpin = async (chartId) => {
    try {
      await axios.delete(`${BASE_URL}/api/pinned-charts/${chartId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPinnedCharts((prev) => prev.filter((chart) => chart._id !== chartId));
    } catch (error) {
      console.error("Failed to unpin chart:", error);
    }
  };

  useEffect(() => {
    if (!token) return;

    axios
      .get(`${BASE_URL}/api/pinned-charts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPinnedCharts(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch pinned charts:", err);
      });
  }, [token]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={i18n.language}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeUp}
        className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white to-[#f9fafa] rounded-2xl shadow-lg w-full"
      >
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 outfit"
          variants={fadeUp}
          custom={1}
        >
          {t("welcome", { name: user?.name })}
        </motion.h1>

        <motion.p
          className="text-base text-gray-600 mb-6"
          variants={fadeUp}
          custom={2}
        >
          {t("dashboard.welcomeMessage")}
        </motion.p>

        {pinnedCharts.length > 0 && (
          <motion.div variants={fadeUp} custom={3} className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
               {t("dashboard.pinnedCharts")}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pinnedCharts.map((chart) => (
                <div
                  key={chart._id}
                  className="relative p-5 bg-white hover:shadow-xl transition-all border border-gray-100 rounded-2xl"
                >
                  <h3 className="font-semibold text-black text-lg mb-1">
                    {chart.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                     {t("fileName")}:{" "}
                    <span className="font-medium text-gray-700">
                      {chart.fileName || "Unnamed File"}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500">
                     {t("dashboard.type")}: {chart.type}
                  </p>

                  <p className="text-sm text-gray-500 mb-3">
                    {t("dashboard.axis", {
                      x: chart.config?.xAxis,
                      y: chart.config?.yAxis,
                    })}
                  </p>

                  <div className="bg-white rounded overflow-hidden">
                    <ChartRenderer
                      fileData={chart.data}
                      xAxis={chart.config?.xAxis}
                      yAxis={chart.config?.yAxis}
                      chartType={chart.type}
                      isSmall
                    />
                  </div>

                  <button
                    onClick={() => handleUnpin(chart._id)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-1.5 rounded transition text-xs font-medium"
                    title={t("dashboard.unpin")}
                  >
                    ✖ {t("dashboard.unpin")}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default DashboardHome;
