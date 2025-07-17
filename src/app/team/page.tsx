import { TeamMember } from "@/components/TeamMember";
import { Description, Title } from "@/components/Text";
import { teamMembers } from "@/data/teamMembers";

export default function Team() {
	return (
		<main className="px-4 2xl:px-96 py-32 w-full min-h-screen">
			<div className="">
				<div className="flex flex-col gap-8 mb-16 items-center text-center">
					<Title className="font-yellowtail text-8xl">
						Meet Our Team
					</Title>
					<Description>
						Passionate. Proactive. Innovative.
					</Description>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
					{teamMembers.map((member) => (
						<TeamMember
							key={member.name}
							name={member.name}
							program={member.program}
							linkedinUrl={member.linkedinUrl}
							imagePath={member.imagePath}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
