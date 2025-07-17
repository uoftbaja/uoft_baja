"use client";

import { cn } from "@/lib/utils";
import { BasicComponentProps } from "@/types/Props";
import { PropsWithChildren } from "react";

export const Title = ({ children, className }: BasicComponentProps) => {
	return (
		<h1 className={cn(["text-5xl font-bold", className])}>{children}</h1>
	);
};

export const Description = ({ children, className }: BasicComponentProps) => {
	return <h2 className={cn(["text-2xl", className])}>{children} </h2>;
};
