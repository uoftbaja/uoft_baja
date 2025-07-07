"use client";

import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";
import { QuoteBanner } from "@/components/QuoteBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { subTeams } from "@/data/subteams";
import { SubTeamCard } from "@/components/SubTeam";
import { Description, Title } from "@/components/Text";
import { DisplayCard } from "@/components/DisplayCard";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll(); // scrollYProgress is a value betweeo 0 and 1

	return (
		<main>
			<ImageGallery />
			{/* <div className="px-96 py-4 flex flex-col items-center gap-16"> */}
			<section className="flex flex-col bg-gray-300/30 px-4 2xl:px-96 py-4 min-h-screen h-full gap-16 justify-center rounded-3xl m-4 shadow-sm">
				<QuoteBanner />
				<DisplayCard title="What is Baja?">
					<span className="text-xl leading-relaxed">
						The Baja SAE competition is composed of static and
						dynamic events. The static event is the business
						presentation, written reports, design evaluation and
						cost reports. The dynamic events are hill climb, sled
						pull, maneuverability events, rock crawl, suspension and
						traction events, acceleration and endurance race. The
						dynamic events can change depending on where the
						competition is being held. The major competitions are
						held across the United States, some of the past
						locations have been: California, Pennsylvania, Michigan,
						Oregon and Ohio among many more.{" "}
						<Link
							href="https://www.bajasae.net/res/ResultsLanding.aspx"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800 underline"
						>
							See past results
						</Link>{" "}
						for all past locations with results.
					</span>
				</DisplayCard>
				<DisplayCard title="About Us:">
					<span className="text-xl leading-relaxed">
						The U of T Baja Team aims to give students of many
						disciplines an avenue to hone their skills in a
						supportive environment through designing, building and
						competing in the{" "}
						<Link
							href="https://www.bajasae.net/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800 underline"
						>
							Baja SAE competition
						</Link>{" "}
						with an entirely student designed vehicle. The U of T
						Baja team was originally founded in 2012 and competed
						for almost 10 years before the team dissolved. In the
						fall of 2024 the team was restarted from scratch and is
						actively being rebuilt. Our goal is to have an entirely
						rebuilt car to compete with by Spring 2026.
					</span>
				</DisplayCard>
			</section>
			<section className="min-h-screen h-full flex flex-col gap-16 items-center px-4 2xl:px-96 py-4 justify-center">
				<Title>Our Subteams</Title>
				<Description>
					Our team is divided into 7 core subteams across engineering,
					business, design, and outreach
				</Description>
				<div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-8">
					{subTeams.map((subteam) => {
						return <SubTeamCard {...subteam} key={subteam.title} />;
					})}
				</div>
			</section>
		</main>
	);
}
