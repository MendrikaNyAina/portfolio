import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import { Props } from "../_interface/BasicProps";
import TypographyH3 from "./TypographyH3";

/* eslint-disable react/react-in-jsx-scope */
type CardXpProps = {
    content: {
        title: string;
        date: string;
        description: string[];
    },

} & Props
export const CardXp = (props: CardXpProps) => {
    return (
        <MagicCard
            className={cn("cursor-pointer text-wrap rounded-2xl border-primary p-10", props.className)}
        >

            {/* <div className={"rounded-2xl border-4 border-solid border-primary p-10 " + (props.className?props.className:"")} > */}
            <div className="flex justify-between pb-2 ">
                <TypographyH3 className="text-xl">{props.content.title} </TypographyH3>
                <Badge variant="outline" className="text-secondary">{props.content.date} </Badge>
            </div>
            <ul className="list-disc text-sm">
                {props.content.description.map((txt, cle) => {
                    return (<li key={cle}>&nbsp;&nbsp;&nbsp; - &nbsp;{txt} </li>);
                })}
            </ul>
            {props.children}
            {/* </div> */}
        </MagicCard>
    )
}