
import { useLanguage } from "@/context/LanguageContext";
import { AnimateDiv } from "../AnimateDiv";
import { CardProject } from "../CardProject";
import { SectionWithTitle } from "../SectionWithTitle";
/* eslint-disable react/react-in-jsx-scope */
export const SectionProject = () => {
    const { content } = useLanguage();
    const desc = content();
    return (
        <AnimateDiv>
            <SectionWithTitle title={desc.titleItem.project} id="sectionProject">
                <div className={"mb-10 grid  grid-cols-2 gap-4"}>
                    {desc.projectInfo.map((elt, key) => {
                        return <CardProject key={key} content={elt}></CardProject>
                    })}
                </div>

            </SectionWithTitle>
        </AnimateDiv>)
}