/* eslint-disable react/react-in-jsx-scope */
"use client"
import { PropsWithChildren } from "react"
interface Props extends PropsWithChildren{
    className?:string
}

export const Section=(props:Props)=>{
    return (
        <section className={"m-auto flex w-full px-4 "+props.className}>
            {props.children}
        </section>
    )
}