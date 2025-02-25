import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";
import { useLanguage } from "@/context/LanguageContext";
import { ReactNode } from "react";
import { Props } from "../_interface/BasicProps";
import { TechnologyBadge } from "./TechnologyBadge";
import TypographyH3 from "./TypographyH3";

type CardArchievementProps = {
    content: {
        title: string;
        date: string;
        description: string;
        technologies: string[];
    },
    icon?:ReactNode
} & Props

/* eslint-disable react/react-in-jsx-scope */
export const CardArchievement = (props: CardArchievementProps) => {
    const { content } = useLanguage();
    const desc = content();
    return (
        <MagicCard
            className="cursor-pointer text-wrap border-primary p-4"
        >

            <div className="flex h-full flex-col justify-between">
                <div className="flex justify-between">
                    <TypographyH3>{props.icon}  {props.content.title} </TypographyH3>
                    <Badge>{props.content.date} </Badge>
                </div>
                
                <div className="flex-1 py-3">
                    <p>
                        <span className="text-lg font-medium underline">{desc.archievementLabel.about} :</span>&nbsp;
                        <span className="text-sm"> {props.content.description} </span>
                    </p>

                    <div className="flex-wrap pt-4 ">
                        {props.content.technologies.map((elt, key) => {
                            return <TechnologyBadge key={key} num={key} text={elt} className="h-fit w-fit text-sm"></TechnologyBadge>
                        })}

                    </div>
                </div>
            </div>
        </MagicCard>
    )
    // return (<div className={"grid grid-cols-[40%_60%] grid-rows-1 gap-0 mb-10 " + (props.className?props.className:"")}>
    //     <div className="fit">
    //         <img src="/img/model.png" alt="model" />
    //     </div>
    //     <div className=" rounded-lg border-b-8 border-r-8 border-t-8 border-solid border-primary p-8">
    //         <div className="flex justify-between">
    //             <TypographyH3>{props.content.title} </TypographyH3>
    //             <Badge>{props.content.date} </Badge>
    //         </div>

    //         <div className="py-3">
    //             <p>
    //                 <span className="text-lg font-medium underline">{desc.archievementLabel.about}</span>&nbsp;:&nbsp;
    //                 <span className="text-sm"> {props.content.description} </span>
    //             </p>

    //             <div className="flex">
    //                 <span className="text-lg font-medium underline">{desc.archievementLabel.technology}</span>&nbsp;:&nbsp;
    //                 <span className="flex items-center justify-center">
    //                     {props.content.technologies.map((elt, key) => {
    //                         return <TechnologyBadge key={key} num={key} text={elt} className="text-sm"></TechnologyBadge>
    //                     })}
    //                 </span>
    //             </div>
    //         </div>
    //     </div>
    // </div>)
}