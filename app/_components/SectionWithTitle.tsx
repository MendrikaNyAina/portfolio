/* eslint-disable react/react-in-jsx-scope */
import { Props } from "../_interface/BasicProps";
import { Section } from "./Section";
import TypographyH1 from "./TypographyH1";
type SectionProps={
    title:string;
} & Props

export const SectionWithTitle=(props:SectionProps )=>{
    return (<Section className={props.className}>
        <TypographyH1 >{props.title} </TypographyH1>
        {props.children}
    </Section>)
}