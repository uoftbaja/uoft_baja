"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Title } from "@/components/Text";

export default function History() {
	const historyImages = [
		"/history/459627603_2926794484149504_6827768942688131347_n.jpg",
		"/history/462684637_2959355104226775_2333907522414473951_n.jpg",
		"/history/462694355_2959355217560097_9007755663154921911_n.jpg",
		"/history/462717032_2959355810893371_9167679634135717354_n.jpg",
		"/history/462744222_2959355564226729_5200937983011150498_n.jpg",
		"/history/462870608_2959355100893442_1646107229632767399_n.jpg",
		"/history/462879314_2959355824226703_3388402324975802182_n.jpg",
		"/history/462915220_2959355807560038_4715614379783030717_n.jpg",
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === historyImages.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<main className="px-4 2xl:px-96 py-32 w-full flex flex-col gap-16 min-h-screen">
			<div className="flex flex-col gap-16 items-center text-center">
				<Title className="font-yellowtail text-8xl">Our History</Title>

				<section>
					<p className="text-lg leading-relaxed">
						The University of Toronto Baja Racing Team was
						originally founded in 2012 with a small team of four
						passionate students united by a big vision. The team
						would go on to compete in the 2014 Kansas, 2015 Maryland
						and 2016 Rochester SAE competitions with modest success
						until disbandment in 2018. Fast forward to 2025, with
						renewed interest in Baja racing and a dedicated team of
						students, we are taking inspiration from our legacy and
						the lessons learned by previous members and bringing
						Baja back to UofT for good.
					</p>
				</section>

				{/* Image slideshow */}
				<div className="relative w-full h-[600px]">
					{historyImages.map((image, index) => (
						<div
							key={image}
							className={`absolute w-full h-full transition-opacity duration-500 ${
								index === currentImageIndex
									? "opacity-100"
									: "opacity-0"
							}`}
						>
							<Image
								src={image}
								alt={`Historical image ${index + 1}`}
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					))}

					{/* Navigation dots */}
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
						{historyImages.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentImageIndex(index)}
								className={`w-3 h-3 rounded-full transition-colors ${
									index === currentImageIndex
										? "bg-white"
										: "bg-white/50"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
