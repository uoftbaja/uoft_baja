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
import Image from "next/image";

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
			<Link
				href="/"
				className="mr-2 md:ml-2 md:mr-0 order-first place-self-end md:place-self-auto relative h-12 md:h-16 bg-white shadow-lg shadow-accent-foreground rounded-md max-w-fit! p-2"
			>
				<Image
					src="/UTBR_Logo.png"
					alt="logo"
					fill
					className="object-contain relative! w-fit! max-w-15"
				/>
			</Link>

			<NavigationMenu className="place-self-end md:place-self-center my-auto">
				<NavigationMenuList
					className={cn(
						"flex-col gap-2 items-end md:flex-row md:items-center w-fit"
						// showMenu ? "visible" : "invisible"
					)}
				>
					{showMenu && (
						<>
							{navItems.map((item) => {
								if (item.dropdown) {
									return (
										<NavigationMenuItem key={item.label}>
											<NavigationMenuTrigger className="shadow-2xl border shadow-accent-foreground">
												{item.label}
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul className="px-2 py-4 text-center md:flex">
													{item.dropdown.map(
														(dropdown) => (
															<NavigationMenuLink
																key={
																	dropdown.label
																}
																title={
																	dropdown.label
																}
																href={
																	dropdown.href
																}
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
													"shadow-2xl border shadow-accent-foreground"
												)}
												href={item.href}
											>
												{item.label}
											</NavigationMenuLink>
										</NavigationMenuItem>
									);
								}
							})}
						</>
					)}
				</NavigationMenuList>
				<NavigationMenuViewport />
			</NavigationMenu>
			<Button
				className="order-first md:order-last place-self-end w-fit mr-2 shadow-2xl my-auto"
				variant={"outline"}
				onClick={() => setShowMenu((state) => !state)}
			>
				{!showMenu ? <Menu /> : <X />}
			</Button>
		</div>
	);
};

export default Navbar;
