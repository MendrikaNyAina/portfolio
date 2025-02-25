/* eslint-disable react/react-in-jsx-scope */
"use client"
import { Logo } from "./Logo";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "./ThemeToggle";


export const Header = () => {
    const [activeLink, setActiveLink] = useState("");
    const { content, toggleLanguage } = useLanguage();
    const desc = content();

    return (
        <header className="fixed left-0 top-0 z-20 m-auto flex w-full items-center justify-between px-4 backdrop-blur-md">
            <div className="flex items-center">
                <Link href="#about" onClick={(e) => setActiveLink("")}><Logo></Logo></Link>
                <div>
                    <p className="px-2 text-primary">
                        <span className=" block  font-wrestlemania text-xl font-thin leading-none">{desc.fullname}</span>
                        <span className=" block text-xs leading-none ">{desc.jobTitle}</span>
                    </p>

                </div>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="gap-x-10 px-6 text-sm text-primary">
                    <NavigationMenuItem>
                        <NavigationMenuLink href={"#sectionExperience"} className={"hover:underline " + (activeLink == "#sectionExperience" ? "text-secondary" : "")} onClick={(e) => setActiveLink("#sectionExperience")}>{desc.menuItem.experience}</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href={"#sectionProject"} className={"hover:underline " + (activeLink == "#sectionProject" ? "text-secondary" : "")} onClick={(e) => setActiveLink("#sectionProject")}>{desc.menuItem.project}</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href={"#sectionService"} className={"hover:underline " + (activeLink == "#sectionService" ? "text-secondary" : "")} onClick={(e) => setActiveLink("#sectionService")}>{desc.menuItem.service}</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href={"#sectionFormation"} className={"hover:underline " + (activeLink == "#sectionFormation" ? "text-secondary" : "")} onClick={(e) => setActiveLink("#sectionFormation")}>{desc.menuItem.formation}</NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href={"#sectionArchievement"} className={"hover:underline " + (activeLink == "#sectionArchievement" ? "text-secondary" : "")} onClick={(e) => setActiveLink("#sectionArchievement")}>{desc.menuItem.archievement}</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href={"#sectionContact"} className={"hover:underline " + (activeLink == "#sectionContact" ? "text-secondary" : "")} onClick={(e) => setActiveLink("#sectionContact")}>{desc.menuItem.contact}</NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
                <NavigationMenuList>
                    <Button size="icon" variant="logo" className="text-base text-destructive" onClick={toggleLanguage}>{desc.lang} </Button>
                    <ThemeToggle></ThemeToggle>
                </NavigationMenuList>

            </NavigationMenu>
        </header>
    )
}
// const MenuItem = (item: string, link: string) => {
//     const className = "";
//     return (
//         <NavigationMenuItem>
//             <NavigationMenuLink href={link} className={"hover:underline " + className} onClick={(e) => console.log(e)}>{item}</NavigationMenuLink>
//         </NavigationMenuItem>
//     )
// }