import { Props } from "../_interface/BasicProps";

type TypographyH3Props={
    variant?:"secondary" | "accent"
}& Props
/* eslint-disable react/react-in-jsx-scope */
export default function TypographyH3(props:TypographyH3Props) {
    let fg="text-secondary"
    if(props.variant=="accent"){
        fg="text-accent-foreground"
    }
    return (
      <h3 className={"scroll-m-20 text-2xl "+fg+" "+props.className}>
        {props.children}
      </h3>
    )
  }
  