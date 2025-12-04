import React from "react";
import { motion } from "framer-motion";

export default function Card({ title, subtitle, img, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="card-glass p-6 rounded-xl cursor-pointer transition shadow-md hover:shadow-xl"
    >
      <div
        className="h-44 rounded-lg overflow-hidden mb-4"
        style={{ background: color || "#efe2ba" }}
      >
        {img && <img src={img} alt={title} className="w-full h-full object-cover" />}
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
    </motion.div>
  );
}
