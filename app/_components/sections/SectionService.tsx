
import { Badge } from "@/components/ui/badge";
import { content } from "../../_contents/content";

import { Bot, Diamond, Disc, Octagon } from "lucide-react";
import { SectionWithTitle } from "../SectionWithTitle";
import TypographyH3 from "../TypographyH3";
/* eslint-disable react/react-in-jsx-scope */
export const SectionService = () => {
    const variants = ["default", "secondary", "lime", "amber"]
    const desc = content();
    return (<SectionWithTitle title={desc.titleItem.service} >
        <div className="grid grid-cols-2 grid-rows-1 text-center">
            <div className="rounded-lg border-r-8 border-solid border-secondary p-4 ">
                <TypographyH3 variant="accent">Hard Skills</TypographyH3>
                <br />
                {desc.serviceInfo.hardSkill.map((elt, key) => {
                    return (<Badge key={key} form="rounded" variant={variants[key % 4]} className="mb-2 mr-2 text-base">{BadgeIcon(key)}{elt} </Badge>)
                }
                )}
            </div>
            <div className="p-4">
                <TypographyH3 variant="accent" className="text-center">Soft Skills</TypographyH3>
                <br />
                {desc.serviceInfo.softSkill.map((elt, key) => {
                    return (<Badge key={key} form="rounded" variant={variants[key % 4]} className="mb-2 mr-2 text-base">{BadgeIcon(key)}{elt} </Badge>)
                }
                )}
            </div>
        </div>


    </SectionWithTitle>)
}

const BadgeIcon=(id:number)=>{
    const icons=[
        <Diamond className="pr-1"/>, <Disc className="pr-1" />,<Bot className="pr-1"/>,<Octagon className="pr-1"/>
    ]
    return icons[id%4];
}