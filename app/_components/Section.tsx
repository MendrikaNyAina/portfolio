/* eslint-disable react/react-in-jsx-scope */
"use client"

import { Props } from "../_interface/BasicProps"


export const Section=(props:Props)=>{
    if(props.id){
        return (
            <section className={"m-auto w-full px-12 max-w-[1400px] "+(props.className?props.className:"")} id={props.id} >
                {props.children}
            </section>
        )
    }
    return (
        <section className={"m-auto w-full px-12 max-w-[1400px] "+(props.className?props.className:"")} >
            {props.children}
        </section>
    )
    
}