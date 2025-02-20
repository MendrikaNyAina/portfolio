import { Props } from "../_interface/BasicProps";

/* eslint-disable react/react-in-jsx-scope */
export default function TypographyH2(props:Props) {
    return (
      <h2 className={"scroll-m-20  text-4xl text-accent-foreground "+(props.className?props.className:"")}>
        {props.children}
      </h2>
    )
  }
  