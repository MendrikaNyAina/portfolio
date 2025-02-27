/* eslint-disable react/react-in-jsx-scope */
import { Props } from "../_interface/BasicProps";
import { Section } from "./Section";
import TypographyH1 from "./TypographyH1";
type SectionProps={
    title:string;
} & Props

export const SectionWithTitle=(props:SectionProps )=>{
    return (<Section className={"pt-14 "+(props.className?props.className:"")} {...props}>
        <TypographyH1 >{props.title} </TypographyH1>
        {props.children}
    </Section>)
}