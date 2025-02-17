/* eslint-disable react/react-in-jsx-scope */
"use client"

import { Props } from "../_interface/BasicProps"


export const Section=(props:Props)=>{
    return (
        <section className={"m-auto w-full px-12 max-w-[1200px] "+props.className}>
            {props.children}
        </section>
    )
}