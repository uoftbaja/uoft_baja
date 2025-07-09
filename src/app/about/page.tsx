import { DisplayCard } from "@/components/DisplayCard";
import { Description, Title } from "@/components/Text";
import Link from "next/link";

export default function About() {
	return (
		<main className="px-4 2xl:px-96 py-32 w-full flex flex-col gap-16 min-h-screen">
			<div className="flex flex-col gap-16 items-center text-center">
				<Title className="font-yellowtail text-8xl">About Baja</Title>

				<section className="grid gap-4">
					<Description>
						What does the competition look like?
					</Description>
					<p className="text-lg leading-relaxed">
						The Baja SAE competition is composed of static and
						dynamic events. The static event is the business
						presentation, written reports, design evaluation and
						cost reports. The dynamic events are hill climb, sled
						pull, maneuverability events, rock crawl, suspension and
						traction events, acceleration and endurance race.
					</p>
				</section>
			</div>

			{/* Video section with 80% max-width */}
			<div className="w-full mx-auto px-4 mb-8">
				<div className="mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="aspect-video w-full">
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/e1ijbyxJu48?si=Jyo9HdHX6m-LF_3D&amp;controls=0"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							/>
						</div>
						<div className="aspect-video w-full">
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/AEWifdPl0Mw?si=QoPB3E4oZ06g08NR&amp;controls=0"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="px-4 md:px-8 flex flex-col gap-8">
				<p className="text-lg leading-relaxed">
					The dynamic events can change depending on where the
					competition is being held. The major competitions are held
					across the United States, some of the past locations have
					been: California, Pennsylvania, Michigan, Oregon and Ohio
					among many more.{" "}
					<Link
						href="https://www.bajasae.net/res/ResultsLanding.aspx"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:text-blue-800 underline"
					>
						See past results
					</Link>{" "}
					for all past locations with results.
				</p>

				<DisplayCard title="Goal of the car">
					<p className="text-lg leading-relaxed">
						The goal in mind when designing the car is to create a
						car that handles all of the dynamic events well while
						remaining viable for production at a scale of 4000
						vehicles. This means that teams must take into
						consideration the economic factors when designing the
						car, and not just use the most expensive parts. Every
						aspect of the car must be student designed and
						assembled, which gives students an opportunity to dive
						into engineering problems in a constructive environment
						to gain experience.
					</p>
				</DisplayCard>
			</div>
		</main>
	);
}
