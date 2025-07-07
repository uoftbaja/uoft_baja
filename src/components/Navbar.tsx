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

  return (
    <div className="bg-transparent z-30 absolute my-5 grid place-content-center w-screen">
      <NavigationMenu>
        <NavigationMenuList className="">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="px-2 py-4 text-center flex">
                      {item.dropdown.map((dropdown) => (
                        <NavigationMenuLink
                          key={dropdown.label}
                          title={dropdown.label}
                          href={dropdown.href}
                          className={navigationMenuTriggerStyle()}
                        >
                          {dropdown.label}
                        </NavigationMenuLink>
                      ))}
                      {/* test */}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            } else {
              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
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
    </div>
  );
};

export default Navbar;
