import { SponsorType } from "@/types/sponsors";
import { Button } from "./ui/button";
import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Image from "next/image";

export function SponsorCard({ name, imagePath, link }: SponsorType) {
	return (
		<Card
			className="hover:shadow-2xl shadow-sm duration-300 w-64"
			onClick={() => {
				link && window.open(link, "_blank");
			}}
		>
			<div className="relative aspect-[7/8]">
				{imagePath ? (
					<Image
						src={imagePath as string}
						alt={name}
						fill
						className="object-contain w-full h-full px-2"
					/>
				) : (
					<div className="w-full h-full bg-gray-200 flex items-center justify-center"></div>
				)}
			</div>
			<CardHeader>
				<CardTitle className="text-2xl font-semibold flex gap-2 items-center">
					{name}
				</CardTitle>
			</CardHeader>
		</Card>
	);
}
