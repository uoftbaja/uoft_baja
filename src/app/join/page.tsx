import { DisplayCard } from "@/components/DisplayCard";
import { SubTeamCard } from "@/components/SubTeam";
import { Description, Title } from "@/components/Text";
import { subTeams } from "@/data/subteams";

export default function Join() {
	return (
		<main className="px-4 2xl:px-96 py-32 w-full flex flex-col gap-16 min-h-screen">
			<div className="flex flex-col gap-8 items-center text-center">
				<Title className="font-yellowtail text-8xl">Join Us!</Title>
				<Description>
					Itching to get your hands dirty? Want to leave behind a
					positive impact? Interested in helping us build the legacy?
				</Description>
				<p className="text-lg leading-relaxed">
					As a growing team, we are always looking for new members to
					join. Your help would leave a great impact on our team!
					Check out the following subteams.
				</p>
			</div>
			{/* Introduction */}

			{/* Subteams */}
			<section className="flex flex-col gap-16 items-center justify-center w-full">
				<div className="grid grid-cols-1 xl:grid-cols-4 gap-8 w-full">
					{subTeams.map((subteam) => {
						return <SubTeamCard {...subteam} key={subteam.title} />;
					})}
				</div>
			</section>

			<p className="text-xl font-semibold mb-12 text-center">
				There is something for everyone no matter the discipline!
			</p>

			{/* How to join */}
			<section>
				<DisplayCard title="How to join?">
					<p>
						At the beginning of the academic Fall semester, we have
						a kickoff event followed by a recruitment cycle, stay
						updated by following our social media accounts{" "}
						<a
							href="https://instagram.com/uoftbajaracing"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800"
						>
							@uoftbajaracing
						</a>
					</p>
					{/* <p>
						If you are hoping to join in the middle of the year send
						us an email{" "}
						<a
							href="mailto:uoftbajaracing@gmail.com"
							className="text-blue-600 hover:text-blue-800"
						>
							uoftbajaracing@gmail.com
						</a>
						.
					</p> */}
					<br />
					<p>
						We accept applications on a rolling basis, so please
						fill out the interest form if you are interested in
						joining the club and we will get back to you!{" "}
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSdQ2hiKk3E4BTA7dAjsORhx79VLOwjdXwZcrNuZdP5mUQzAuw/viewform?usp=preview"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800"
						>
							Click here for the form
						</a>
					</p>
				</DisplayCard>
			</section>
		</main>
	);
}
