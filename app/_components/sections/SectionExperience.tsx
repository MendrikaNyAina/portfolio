"use client"
import { PawPrint } from "lucide-react";
import { useTheme } from "next-themes";
import { content } from "../../_contents/content";
import { CardXp } from "../CardXp";
import { SectionWithTitle } from "../SectionWithTitle";
/* eslint-disable react/react-in-jsx-scope */
export const SectionExperience = () => {
    const { theme } = useTheme();

    const pic2 = theme !== 'dark'
        ? { src: "/img/picprofil2_light.png", alt: "Pic2 light" }
        : { src: "/img/picprofil2_dark.png", alt: "Pic2 dark" };

    const desc = content();
    return (<SectionWithTitle title={desc.titleItem.experience} >
        <div className={`grid grid-cols-[45%_10%_45%] ${"grid-rows-" + (desc.experienceInfo.length)} gap-4 p-4`}>
            <div key="lambda" className="flex items-start justify-end">
                <img src={pic2.src} alt={pic2.alt} className="max-w-[400px] place-self-end" />
            </div>
            <div className={`${"row-span-" + (desc.experienceInfo.length)} relative flex items-center justify-center `}>
                <div className="absolute top-0 h-6 w-6 rounded-full bg-secondary"></div>
                <div className="h-full w-3 rounded-lg bg-secondary"></div>
                <div className="absolute bottom-0 h-6 w-6 rounded-full bg-secondary"></div>
            </div>

            {desc.experienceInfo.map((elt, key) => {
                if (key == 0) {
                    return <CardXp key={key} content={elt} className="self-start"></CardXp>;
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