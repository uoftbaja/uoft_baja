"use client";

import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => {
  return <h1 className="text-5xl font-bold">{children}</h1>;
};
