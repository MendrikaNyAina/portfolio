import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ReactNode } from "react";
import { Props } from "../_interface/BasicProps";
import { TechnologyBadge } from "./TechnologyBadge";
import TypographyH3 from "./TypographyH3";

type CardProjectProps = {
    content: {
        title: string;
        definition: string;
        how: string;
        githubLink: string;
        technologies: string[]
    },
    icon?: ReactNode
} & Props

/* eslint-disable react/react-in-jsx-scope */
export const CardProject = (props: CardProjectProps) => {
    const { content } = useLanguage();
    const desc = content();

    return (
        <MagicCard
            className="cursor-pointer text-wrap border-primary p-4"
        >

            <div className="flex h-full flex-col justify-between">
                <TypographyH3>{props.icon}  {props.content.title} </TypographyH3>
                <div className="flex-1 py-3">
                    <p>
                        <span className="text-lg font-medium underline">{desc.projectLabel.what} :</span>&nbsp;
                        <span className="text-sm"> {props.content.definition} </span>
                    </p>

                    <p>
                        <span className="text-lg font-medium underline">{desc.projectLabel.how} :</span>&nbsp;
                        <span className="text-sm"> {props.content.how} </span>
                    </p>
                    <div className="flex-wrap pt-4 ">
                        {props.content.technologies.map((elt, key) => {
                            return <TechnologyBadge key={key} num={key} text={elt} className="h-fit w-fit text-sm"></TechnologyBadge>
                        })}

                    </div>
                </div>
                <div className="flex justify-end">
                    <Button variant="secondary"><Link href={props.content.githubLink} target="_blank"> {desc.projectLabel.githubLink} </Link></Button>
                </div>
            </div>
        </MagicCard>
    )

    // return (
    //     <div className={"grid grid-cols-[40%_60%] grid-rows-1 gap-0 mb-10 " + (props.className ? props.className : "")}>
    //         <div className="fit">
    //             <img src="/img/model.png" alt="model" />
    //         </div>
    //         <div className=" rounded-lg border-b-8 border-r-8 border-t-8 border-solid border-primary p-8">
    //             <div className="flex justify-between">
    //                 <TypographyH3>{props.content.title} </TypographyH3>
    //             </div>

    //             <div className="py-3">
    //                 <p>
    //                     <span className="text-lg font-medium underline">{desc.projectLabel.what}</span>:
    //                     <span className="text-sm"> {props.content.definition} </span>
    //                 </p>

    //                 <p>
    //                     <span className="text-lg font-medium underline">{desc.projectLabel.how}</span>:
    //                     <span className="text-sm"> {props.content.how} </span>
    //                 </p>
    //             </div>
    //             <div className="flex justify-end">
    //                 <Button variant="secondary">{desc.projectLabel.githubLink} </Button>
    //             </div>
    //         </div>
    //     </div>
    // )
}