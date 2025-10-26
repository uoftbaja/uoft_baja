export interface SponsorType {
	name: string;
	link?: string;
	imagePath?: string | boolean;
	tier?: tierType; // TODO: talk with Qin and Russell about the tiers
}

export const tierArray = [
	"Diamond",
	"Platinum",
	"Gold",
	"Silver",
	"Bronze",
] as const;
type tierType = (typeof tierArray)[number];
