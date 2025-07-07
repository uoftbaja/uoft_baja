"use client";

import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const sleep = (millis: number) => {
	return new Promise((resolve) => setTimeout(resolve, millis));
};

const imageHeight = "h-screen"; //

const ImageGallery = () => {
	const images: ImageCardProps[] = [
		{
			src: "/baja_1.png",
			title: "University of Toronto Baja Racing Team",
		},
		{
			src: "/baja_2.png",
			title: "University of Toronto",
		},
		{
			src: "/baja_3.png",
			title: "Baja Racing Team",
		},
	];

	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const loopImage = async () => {
			while (true) {
				await sleep(5000);
				nextImage();
			}
		};

		loopImage();
	}, []);

	const nextImage = () => {
		setCurrentImage((current) => {
			if (current === images.length - 1) {
				return 0;
			} else {
				return current + 1;
			}
		});
	};

	const prevImage = () => {
		setCurrentImage((current) => {
			if (current === 0) {
				return images.length - 1;
			} else {
				return current - 1;
			}
		});
	};

	return (
		<div className={`${imageHeight} w-full`}>
			<ImageCard
				src={images[currentImage].src}
				title={images[currentImage].title}
				// onClick={prevImage}
			/>
		</div>
	);
};

export default ImageGallery;

interface ImageCardProps {
	src: string;
	title: string;
	onClick?: MouseEventHandler<HTMLDivElement>;
}

export const ImageCard = ({ src, title, onClick }: ImageCardProps) => {
	return (
		<div className={`${imageHeight} relative`} onClick={onClick}>
			<div className="absolute inset-0 bg-black/35 z-10 h-full" />
			<Image
				src={src}
				fill
				alt="UofT Baja Racing Team"
				className="object-cover !relative"
			/>
			<div className="absolute z-20 inset-0 grid place-content-center gap-8">
				<h1 className="text-9xl font-bold text-center font-yellowtail text-white">
					{title}
				</h1>
				<Button
					variant={"outline"}
					className="animate-bounce w-fit h-fit p-4 rounded-full mx-auto"
				>
					<ArrowDown />
				</Button>
			</div>
		</div>
	);
};
