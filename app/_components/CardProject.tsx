import { Button } from "@/components/ui/button";
import { content } from "../_contents/content";
import { Props } from "../_interface/BasicProps";
import TypographyH3 from "./TypographyH3";

type CardProjectProps = {
    content: {
        title: string;
        photo: string;
        definition: string;
        how: string;
        githubLink: string;
    }
} & Props

/* eslint-disable react/react-in-jsx-scope */
export const CardProject = (props: CardProjectProps) => {
    const desc = content();
    return (<div className={"grid grid-cols-[40%_60%] grid-rows-1 gap-0 mb-10 " + (props.className?props.className:"")}>
        <div className="fit">
            <img src="/img/model.png" alt="model" />
        </div>
        <div className=" rounded-lg border-b-8 border-r-8 border-t-8 border-solid border-primary p-8">
            <div className="flex justify-between">
                <TypographyH3>{props.content.title} </TypographyH3>
            </div>

            <div className="py-3">
                <p>
                    <span className="text-lg font-medium underline">{desc.projectLabel.what}</span>:
                    <span className="text-sm"> {props.content.definition} </span>
                </p>

                <p>
                    <span className="text-lg font-medium underline">{desc.projectLabel.how}</span>:
                    <span className="text-sm"> {props.content.how} </span>
                </p>
            </div>
            <div className="flex justify-end">
                <Button variant="secondary">{desc.projectLabel.githubLink} </Button>
            </div>
        </div>
    </div>)
}