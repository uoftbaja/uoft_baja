import { PropsWithChildren, ReactNode } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "./ui/card";

interface Props extends PropsWithChildren {
	title: string | ReactNode;
	footer?: ReactNode;
}

export const DisplayCard = ({ title, children, footer }: Props) => {
	return (
		<Card className="shadow-2xl">
			<CardHeader>
				<CardTitle className="text-4xl font-semibold">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
			{footer && <CardFooter>{footer}</CardFooter>}
		</Card>
	);
};
