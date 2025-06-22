import { fadeInUp } from "../animations/fadeInUp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function FileInput({ onChange }) {
  const { t } = useTranslation();

  return (
    <motion.div
      custom={0}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="mb-4 flex justify-center"
    >
      <input
        id="upload-input"
        type="file"
        accept=".xls,.xlsx"
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor="upload-input"
        className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full cursor-pointer hover:bg-white/10 text-sm"
      >
        {t("upload.chooseFile")}
      </label>
    </motion.div>
  );
}

export default FileInput;
