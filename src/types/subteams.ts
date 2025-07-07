import { JSX, NamedExoticComponent, ReactNode } from "react";

export type SubTeamType = {
  title: string; // team title
  description: string[]; // array of bullet points
  Icon?: NamedExoticComponent;
};
