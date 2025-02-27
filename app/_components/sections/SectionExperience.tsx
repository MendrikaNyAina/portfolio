"use client"
import { PawPrint } from "lucide-react";
import { useTheme } from "next-themes";

import { useLanguage } from "@/context/LanguageContext";
import { AnimateDiv } from "../AnimateDiv";
import { CardXp } from "../CardXp";
import { SectionWithTitle } from "../SectionWithTitle";
/* eslint-disable react/react-in-jsx-scope */
export const SectionExperience = () => {
    const { content } = useLanguage();
    const { theme } = useTheme();

    const pic2 = theme !== 'dark'
        ? { src: "/img/picprofil2_light.png", alt: "Pic2 light" }
        : { src: "/img/picprofil2_dark.png", alt: "Pic2 dark" };

    const desc = content();

    return (
        <AnimateDiv>
            <SectionWithTitle title={desc.titleItem.experience} id="sectionExperience">
                <div className={`grid auto-rows-auto grid-cols-[5%_95%] gap-4 p-4 md:grid-cols-[45%_10%_45%]`}>
                    <div key="lambda" className="hidden items-start justify-end md:flex">
                        <img src={pic2.src} alt={pic2.alt} className="max-w-[400px] place-self-end" />
                    </div>
                    <div className={`relative col-start-1 md:col-start-2 ${"row-span-2"} flex items-center justify-center`}>
                        <div className="absolute top-0 h-6 w-6 rounded-full bg-secondary"></div>
                        <div className="h-full w-3 rounded-lg bg-secondary"></div>
                        <div className="absolute bottom-0 h-6 w-6 rounded-full bg-secondary"></div>
                    </div>

                    {/* j'ai decidé de faire statique parce que ça posait problème dans la rendering */}
                    <CardXp content={desc.experienceInfo[0]} className="self-start"></CardXp>

                    <CardXp content={desc.experienceInfo[1]}></CardXp>
                    <div className="hidden items-center justify-center md:flex "><PawPrint size={100} className="text-accent-foreground"></PawPrint></div>

                    {/* {desc.experienceInfo.map((elt, key) => {
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
            )} */}

                </div>
            </SectionWithTitle>
        </AnimateDiv>
    )
}