/* eslint-disable react/react-in-jsx-scope */
import { content } from "@/app/_contents/content";
import { SectionWithTitle } from "../SectionWithTitle";

export const SectionFormation=()=>{
    const desc = content();
    return (<SectionWithTitle title={desc.titleItem.formation} >
  <div className={`grid grid-cols-[20%_5%_75%] ${"grid-rows-" + (desc.formationInfo.length)} gap-4 p-4`}></div>
    </SectionWithTitle>)
}