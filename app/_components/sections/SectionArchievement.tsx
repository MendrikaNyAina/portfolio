 
/* eslint-disable react/react-in-jsx-scope */
import { content } from "@/app/_contents/content";
import { CardArchievement } from "../CardArchievement";
import { SectionWithTitle } from "../SectionWithTitle";

export const SectionArchievement=()=>{
    const desc = content();
    return (<SectionWithTitle title={desc.titleItem.archievement} >
        {desc.archievementInfo.map((elt, key)=>{
            return (<CardArchievement content={elt} key={key}></CardArchievement>)
        })}
        
    </SectionWithTitle>)
}