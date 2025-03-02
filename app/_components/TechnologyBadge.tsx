/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { Badge } from "@/components/ui/badge";
import { Bot, Diamond, Disc, Octagon } from "lucide-react";
import { Props } from "../_interface/BasicProps";
type TechnologyBadgeProps={
    num:number, 
    text:string
} & Props
export const TechnologyBadge=(props:TechnologyBadgeProps)=>{
    const variants:Array<"default" | "secondary" | "lime" | "amber"> = ["default", "secondary", "lime", "amber"];
    return (<Badge form="rounded" variant={variants[props.num % 4]} className={"mb-2 mr-2 text-base "+(props.className?props.className:"")}>{BadgeIcon(props.num)}{props.text} </Badge>)
    
}

const BadgeIcon=(id:number)=>{
    const icons=[
        <Diamond className="pr-1"/>, <Disc className="pr-1" />,<Bot className="pr-1"/>,<Octagon className="pr-1"/>       
    ]
    return icons[id%4];
}