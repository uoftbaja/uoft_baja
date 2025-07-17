"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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
		<div className="md:flex items-center h-fit w-full">
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
			<Image
				src="/UTBR_Logo.png"
				alt="logo"
				fill
				className="object-contain relative! w-fit!"
			/>
			<h1 className="text-5xl md:text-8xl font-bold text-center">
				{quote}
			</h1>
			{/* </motion.div> */}
		</div>
	);
}
