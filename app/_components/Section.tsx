/* eslint-disable react/react-in-jsx-scope */
"use client"

import { Props } from "../_interface/BasicProps"


export const Section=(props:Props)=>{
    return (
        <section className={"m-auto flex w-full px-12 "+props.className}>
            {props.children}
        </section>
    )
}