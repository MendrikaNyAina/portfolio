
/* eslint-disable react/react-in-jsx-scope */
import { useLanguage } from "@/context/LanguageContext";
import { AnimateDiv } from "../AnimateDiv";
import { CardArchievement } from "../CardArchievement";
import { SectionWithTitle } from "../SectionWithTitle";

export const SectionArchievement = () => {
    const { content } = useLanguage();
    const desc = content();
    return (
        <AnimateDiv>
            <SectionWithTitle title={desc.titleItem.archievement} id="sectionArchievement" >
                <div className={"mb-10 grid  grid-cols-2 gap-4"}>
                    {desc.archievementInfo.map((elt, key) => {
                        return (<CardArchievement content={elt} key={key}></CardArchievement>)
                    })}
                </div>
            </SectionWithTitle>
        </AnimateDiv>)
}