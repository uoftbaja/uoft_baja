import { SubTeamType } from "@/types/subteams";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SubTeamCard({ title, description, Icon }: SubTeamType) {
	return (
		<Card className="hover:shadow-2xl shadow-sm duration-300">
			<CardHeader>
				<CardTitle className="text-2xl font-semibold flex gap-2 items-center">
					{Icon && <Icon />} {title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className="list-disc pl-5 space-y-2">
					{description.map((string, index) => {
						return <li key={index}>{string}</li>;
					})}
				</ul>
			</CardContent>
		</Card>
	);
}
