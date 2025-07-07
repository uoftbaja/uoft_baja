"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";

interface NavItems extends NavItemsProps {
	dropdown?: NavItemsProps[];
}

interface NavItemsProps {
	label: string;
	href: string;
}

const Navbar = () => {
	const navItems: NavItems[] = [
		{ label: "Home", href: "/" },
		{
			label: "About Us",
			href: "#",
			dropdown: [
				{ label: "Baja Racing", href: "/about" },
				{ label: "History", href: "/about/history" },
			],
		},
		{ label: "Sponsors", href: "/sponsors" },
		{ label: "Team", href: "/team" },
		{ label: "Join the Team", href: "/join" },
	];

	const [showMenu, setShowMenu] = useState(true);

	return (
		<div className="bg-transparent z-30 fixed my-5 grid md:grid-flow-col w-screen gap-4">
			<NavigationMenu className="place-self-end">
				<NavigationMenuList
					className={cn(
						"flex-col gap-2 items-end md:flex-row md:items-center"
						// showMenu ? "visible" : "invisible"
					)}
				>
					{showMenu &&
						navItems.map((item) => {
							if (item.dropdown) {
								return (
									<NavigationMenuItem key={item.label}>
										<NavigationMenuTrigger className="shadow-2xl border">
											{item.label}
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="px-2 py-4 text-center md:flex">
												{item.dropdown.map(
													(dropdown) => (
														<NavigationMenuLink
															key={dropdown.label}
															title={
																dropdown.label
															}
															href={dropdown.href}
															className={cn(
																navigationMenuTriggerStyle()
																// "shadow-lg"
															)}
														>
															{dropdown.label}
														</NavigationMenuLink>
													)
												)}
												{/* test */}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
								);
							} else {
								return (
									<NavigationMenuItem key={item.label}>
										<NavigationMenuLink
											className={cn(
												navigationMenuTriggerStyle(),
												"shadow-2xl border"
											)}
											href={item.href}
										>
											{item.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
								);
							}
						})}
				</NavigationMenuList>
				<NavigationMenuViewport />
			</NavigationMenu>
			<Button
				className="order-first md:order-last place-self-end w-fit mr-2 shadow-2xl"
				variant={"outline"}
				onClick={() => setShowMenu((state) => !state)}
			>
				{showMenu ? <Menu /> : <X />}
			</Button>
		</div>
	);
};

export default Navbar;
