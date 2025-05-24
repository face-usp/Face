"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.div
            className="flex items-center space-x-4 gap-2"
            initial={{ x: 0 }}
            animate={{ x: -200, opacity: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.img
              src="/next.svg"
              alt="Logo"
              className="w-32 h-32"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.h1
              className="text-3xl font-semibold text-gray-800"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -10, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              USPFace
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}