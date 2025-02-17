
import { content } from "../../_contents/content";
import { CardProject } from "../CardProject";
import { SectionWithTitle } from "../SectionWithTitle";
/* eslint-disable react/react-in-jsx-scope */
export const SectionProject = () => {


    const desc = content();
    return (<SectionWithTitle title={desc.titleItem.project} >
        {desc.projectInfo.map((elt, key)=>{
            return <CardProject key={key} content={elt}></CardProject>
        })}
        
        
    </SectionWithTitle>)
}