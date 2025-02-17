import { Props } from "../_interface/BasicProps";

/* eslint-disable react/react-in-jsx-scope */
export default function TypographyH3(props:Props) {
    return (
      <h3 className={"scroll-m-20 text-2xl text-secondary "+props.className}>
        {props.children}
      </h3>
    )
  }
  