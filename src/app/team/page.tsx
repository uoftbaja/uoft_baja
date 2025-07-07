import { TeamMember } from "@/components/TeamMember";
import { teamMembers } from "@/data/teamMembers";

export default function Team() {
	return (
		<main className="bg-white min-h-screen pb-16">
			<div className="max-w-6xl mx-auto px-4 py-16 md:px-8">
				<h1 className="text-4xl font-bold mb-12 text-gray-900">
					Our Team
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
