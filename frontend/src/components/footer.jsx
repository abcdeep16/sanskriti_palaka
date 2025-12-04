import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gradient-to-r from-[#faf3e0] to-[#f0e3c0] mt-16 py-10 shadow-inner"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-700 font-medium tracking-wide">
          © {new Date().getFullYear()} Sanskriti Pallaka · Preserving Indian Heritage
        </p>
      </div>
    </motion.footer>
  );
}
