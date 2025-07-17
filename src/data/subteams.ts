import { SubTeamType } from "@/types/subteams";
import {
	CircleParking,
	CircuitBoard,
	Grid2x2,
	Megaphone,
	PiggyBank,
	ShipWheel,
	Truck,
} from "lucide-react";

export const subTeams: SubTeamType[] = [
	{
		title: "Finance",
		description: [
			"Keeping track of the finances of the team to ensure optimal budgeting and allocation of resources for vehicle development",
			"Develop the business event deliverables for competition",
		],
		Icon: PiggyBank,
	},
	{
		title: "Marketing",
		description: [
			"Spreading the word about our vision and getting hype for the car",
			"Managing social media accounts, producing content and developing brand awareness",
		],
		Icon: Grid2x2,
	},
	{
		title: "Outreach",
		description: [
			"Secure sponsorships from companies and the university to fund team and event expenses",
			"Organizing community events to boost engagement",
			"Develop external relationships for opportunities",
		],
		Icon: Megaphone,
	},
	{
		title: "Suspension and steering",
		description: [
			"Design and adapt the car to stay in contact with the ground as much as possible while traversing challenging terrains",
			"Design to give the driver optimal control while navigating",
		],
		Icon: ShipWheel,
	},
	{
		title: "Power-train",
		description: [
			"Transform power from the engine to movement for top performance (we are required to use a Kohler CH440 engine by Baja SAE)",
			"Optimize transmission for various design challenges",
		],
		Icon: CircleParking,
	},
	{
		title: "Electrical",
		description: [
			"Optimize vehicle performance through electronic circuitry and software controls",
			"Develop data acquisition, safety and light systems",
		],
		Icon: CircuitBoard,
	},
	{
		title: "Chassis",
		description: [
			"Engineer the framework for drivers to ensure comfortability, safety and strength for rough terrains",
			"Fabricate the chassis",
		],
		Icon: Truck,
	},
];
