"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function QuoteBanner() {
  const quote = "Powering the next generation of students";
  const [width, setWidth] = useState(1500);

  useEffect(() => {
    if (window) {
      //   console.log(window.innerWidth);
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="flex items-center my-16 h-fit">
      {/* <motion.div
        initial={{
          x: width * 1.4,
        }}
        animate={{
          x: -width,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      > */}
      <h1 className="text-8xl font-bold text-center">{quote}</h1>
      {/* </motion.div> */}
    </div>
  );
}
