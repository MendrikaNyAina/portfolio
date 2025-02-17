"use client"
import { PawPrint } from "lucide-react";
import { useTheme } from "next-themes";
import { content } from "../_contents/content";
import { CardXp } from "./CardXp";
import { SectionWithTitle } from "./SectionWithTitle";
/* eslint-disable react/react-in-jsx-scope */
export const SectionExperience = () => {
    const { theme } = useTheme();

    const pic2 = theme !== 'dark'
        ? { src: "/img/picprofil2_light.png", alt: "Pic2 light" }
        : { src: "/img/picprofil2_dark.png", alt: "Pic2 dark" };

    const desc = content();
    return (<SectionWithTitle title={desc.menuItem.experience} >
        <div className={`grid grid-cols-[45%_10%_45%] ${"grid-rows-" + (desc.experienceInfo.length)} gap-4 p-4`}>
            <div key="lambda" className="relative">
                <img src={pic2.src} alt={pic2.alt} className="absolute bottom-0" />
            </div>
            <div className={`${"row-span-" + (desc.experienceInfo.length)} flex items-center justify-center `}>
                <div className="h-full w-3 rounded-lg bg-secondary"></div>
            </div>

            {desc.experienceInfo.map((elt, key) => {
                console.log(key % 2)
                if (key == 0) {
                    return <CardXp key={key} content={elt}></CardXp>;
                } else if (key % 2 == 0) {
                    return <><div key={key + "a"}></div> <CardXp key={key} content={elt}></CardXp></>
                } else {
                    return <>
                        <CardXp key={key} content={elt}></CardXp>
                        <div key={key + "b"} className="flex items-center justify-center"><PawPrint size={100} className="text-accent-foreground"></PawPrint></div>
                    </>
                }
            }
            )}

        </div>
    </SectionWithTitle>)
}