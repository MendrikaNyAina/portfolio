/* eslint-disable react/react-in-jsx-scope */
// "use client"
import { Logo } from "./Logo";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { content } from "../_contents/content";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
    const desc = content();
    return (
        <header className="fixed left-0 top-0 z-10 m-auto flex w-full items-center justify-between px-4 backdrop-blur-md">
            <div className="flex items-center">
                <Logo></Logo>
                <div>
                    <p className="px-2 text-primary">
                        <span className=" block  font-wrestlemania text-xl font-thin leading-none">{desc.fullname}</span>
                        <span className=" block text-xs leading-none ">{desc.jobTitle}</span>
                    </p>

                </div>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="gap-x-10 px-6 text-sm text-primary">
                    {MenuItem(desc.menuItem.experience, "#sectionExperience")}
                    {MenuItem(desc.menuItem.service, "#sectionService")}
                    {MenuItem(desc.menuItem.formation, "#sectionFormation")}
                    {MenuItem(desc.menuItem.project, "#sectionProject")}
                    {MenuItem(desc.menuItem.archievement, "#sectionArchievement")}
                    {MenuItem(desc.menuItem.contact, "#sectionContact")}
                </NavigationMenuList>
                <NavigationMenuList>
                    <Button size="icon" variant="logo" className="text-base text-destructive">{desc.lang} </Button>
                    <ThemeToggle></ThemeToggle>
                </NavigationMenuList>

            </NavigationMenu>
        </header>
    )
}
const MenuItem = (item: string, link: string) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink href={link}>{item}</NavigationMenuLink>
        </NavigationMenuItem>
    )
}