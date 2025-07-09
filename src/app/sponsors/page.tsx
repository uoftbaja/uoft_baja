"use client";

import { DisplayCard } from "@/components/DisplayCard";
import { SponsorCard } from "@/components/Sponsor";
import { Description, Title } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { sponsors } from "@/data/sponsors";
import { cn } from "@/lib/utils";

export default function Sponsors() {
	return (
		<main className="px-4 xl:px-96 py-32 w-full min-h-screen">
			<div className="">
				<div className="flex flex-col gap-8 mb-16 items-center text-center">
					<Title className="font-yellowtail text-8xl">
						Our Sponsors
					</Title>
					<Description>
						Special thanks to our sponsors for supporting our team!
						We would not be here without you!
					</Description>
				</div>
				{/* Sponsor Tiers */}
				<section className="mb-16 flex items-center gap-8 flex-col">
					<h2 className="text-3xl font-semibold">Current Sponsors</h2>
					<div
						className={cn([
							"grid gap-8 w-full place-content-center",
							sponsors.length > 3 &&
								"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
						])}
					>
						{sponsors.map((sponsor) => (
							<SponsorCard {...sponsor} />
						))}
					</div>
				</section>

				{/* Thank You Message */}
				<section>
					<DisplayCard
						title="Thank you for your support"
						footer={
							<div className="flex flex-col gap-4 w-full">
								<Button
									variant={"default"}
									onClick={() => {
										window.open(
											"https://drive.google.com/file/d/1lSKyjdOUsumiQ_kuDv1wLSgJK_z07k7K/view?usp=drive_link",
											"_blank"
										);
									}}
								>
									Download Sponsorship Package
								</Button>
								<p className="">
									If you are interested in sponsoring our team
									please reach out via email:{" "}
									<a
										href="mailto:uoftbajaracing@gmail.com"
										className="text-blue-600 hover:text-blue-800"
									>
										uoftbajaracing@gmail.com
									</a>
								</p>
							</div>
						}
					>
						<p className="mb-4">
							We couldn't have done this without you. We are
							dedicated students hoping to turn the ideas in our
							minds into reality. Looking for the opportunity to
							come together as a community and apply what we learn
							in class to create something impactful.
						</p>
						<p className="mb-4">
							We couldn't do this without donations, and our
							sponsors. We appreciate everyone who believes in us
							as much as we do in this vision. Support comes in a
							variety of forms such as services, parts or monetary
							contributions for the vehicle.
						</p>
						<p>
							Your help will support the future generation by
							providing funding for the valuable hands-on learning
							that this team provides. Please see our sponsorship
							package if you are interested in sponsoring the
							team. Any individual donations are much appreciated
							as well.
						</p>
					</DisplayCard>
				</section>

				{/* Sponsorship Package */}
				<section className="space-y-6"></section>
			</div>
		</main>
	);
}
