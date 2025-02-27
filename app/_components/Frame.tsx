import { Props } from "../_interface/BasicProps"

/* eslint-disable react/react-in-jsx-scope */
/**
 * 
 * @param props : add border-x-number in className
 * @returns 
 */
export const Frame=(props:Props)=>{
    return(
        <div className={"border-solid border-destructive md:w-36 md:h-36 w-24 h-24"+(props.className?props.className:"")}></div>
    )
}