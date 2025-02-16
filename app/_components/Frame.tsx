import { Props } from "../_interface/BasicProps"

/* eslint-disable react/react-in-jsx-scope */
/**
 * 
 * @param props : add border-x-number in className
 * @returns 
 */
export const Frame=(props:Props)=>{
    return(
        <div className={"border-solid border-destructive w-36 h-36 "+props.className}></div>
    )
}