import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function DetailModal({ item, onClose }) {
  const [displayItem, setDisplayItem] = useState(item);
  const [isClosing, setIsClosing] = useState(false);

  // Update displayItem when item changes (modal opens)
  useEffect(() => {
    if (item) {
      setDisplayItem(item);
      setIsClosing(false);
    }
  }, [item]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for exit animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 350); // Matches exit animation duration
  };

  if (!displayItem) return null;

  return (
    <AnimatePresence mode="wait">
      {!isClosing && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div
            key="modal-content"
            className="bg-white p-8 rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-xl"
            
            // 👇 EXACT smooth animation from MusicModal with exit animation
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-gray-900">{displayItem.title}</h2>

        {/* SUBTITLE */}
        {displayItem.subtitle && (
          <p className="text-gray-600 mt-1 text-lg">{displayItem.subtitle}</p>
        )}

        {/* DESCRIPTION */}
        <p className="text-gray-700 mt-6 leading-relaxed whitespace-pre-line">
          {displayItem.description}
        </p>

        {/* CLOSE BUTTON */}
        <div className="mt-8 text-right">
          <button
            className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
