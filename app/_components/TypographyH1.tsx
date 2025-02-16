import { Props } from "../_interface/BasicProps";

/* eslint-disable react/react-in-jsx-scope */
export default function TypographyH1(props:Props) {
    return (
      <h1 className={"scroll-m-20 font-wrestlemania text-8xl text-primary "+props.className}>
        {props.children}
      </h1>
    )
  }
  