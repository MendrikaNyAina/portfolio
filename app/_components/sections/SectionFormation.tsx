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
        <div className={`grid grid-cols-1 lg:grid-cols-[20%_5%_75%] ${"grid-rows-"+(desc.formationInfo.length+2) } gap-4 p-4`}>
            <div className="hidden lg:block"></div>
            <div className={`relative ${"row-span-9" } col-start-2  hidden items-center justify-center lg:flex `}>
                <div className="absolute top-0 h-6 w-6 rounded-full bg-secondary"></div>
                <div className="h-full w-3 rounded-lg bg-secondary"></div>
                <div className="absolute bottom-0 h-6 w-6 rounded-full bg-secondary"></div>
            </div>
            <div className="hidden lg:block"></div>

                
            {desc.formationInfo.map((elt, key)=>{
                return <>
                    <div className="flex justify-end" key={key}> <Badge variant={variantsBadge[key%2]}  className="text-base">{elt.date} </Badge></div>
                    <div className="block items-center border-b-2 border-dotted border-secondary pb-2 text-sm lg:flex lg:border-none lg:pb-0" key={key+"b"}>
                        <span className="flex items-center text-base text-accent-foreground">
                            {getIconBook(key)}&nbsp;&nbsp;{elt.title} :&nbsp; </span>
                        <span>{elt.description}</span> </div>
                </>
            })}
        </div> 
    </SectionWithTitle>
    </AnimateDiv>)
}

function getIconBook(id:number){
    const iconBooks=[
        <Book size="18" key={1} />,<BookAudio size="18" key={2}/>, <BookMarked size="18" key={3}/>, <BookText size="18" key={4}/>
    ]
    return iconBooks[id%4];
}

