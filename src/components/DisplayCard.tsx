import { PropsWithChildren } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface Props extends PropsWithChildren {
  title: string;
}

export const DisplayCard = ({ title, children }: Props) => {
  return (
    <Card className="shadow-2xl">
      <CardHeader>
        <CardTitle className="text-4xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
