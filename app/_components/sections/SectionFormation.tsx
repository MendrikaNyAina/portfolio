/* eslint-disable react/react-in-jsx-scope */
"use client"

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { Book, BookAudio, BookMarked, BookText } from "lucide-react";
import { AnimateDiv } from "../AnimateDiv";
import { SectionWithTitle } from "../SectionWithTitle";

export const SectionFormation = () => {
    const { content } = useLanguage();
    const desc = content();
    const variantsBadge = ["default", "secondary"]
    return (<AnimateDiv><SectionWithTitle title={desc.titleItem.formation} id="sectionFormation">
        <div className={`grid grid-cols-[20%_5%_75%] ${"grid-rows-"+(desc.formationInfo.length+2) } gap-4 p-4`}>
            <div></div>
            <div className={`relative ${"row-span-7" } col-start-2  flex items-center justify-center`}>
                <div className="absolute top-0 h-6 w-6 rounded-full bg-secondary"></div>
                <div className="h-full w-3 rounded-lg bg-secondary"></div>
                <div className="absolute bottom-0 h-6 w-6 rounded-full bg-secondary"></div>
            </div>
            <div></div>

                
            {desc.formationInfo.map((elt, key)=>{
                return <>
                    <div className="flex justify-end" key={key}> <Badge variant={variantsBadge[key%2]}  className="text-base">{elt.date} </Badge></div>
                    <div className="flex items-center text-sm" key={key+"b"}><span className="flex items-center text-base text-accent-foreground">{getIconBook(key)}&nbsp;&nbsp;{elt.title} :</span>&nbsp; {elt.description} </div>
                </>
            })}
        </div> 
    </SectionWithTitle>
    </AnimateDiv>)
}

function getIconBook(id:number){
    const iconBooks=[
        <Book size="18" />,<BookAudio size="18"/>, <BookMarked size="18"/>, <BookText size="18"/>
    ]
    return iconBooks[id%4];
}

