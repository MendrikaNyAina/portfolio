


import { useLanguage } from "@/context/LanguageContext";
import { AnimateDiv } from "../AnimateDiv";
import { SectionWithTitle } from "../SectionWithTitle";
import { TechnologyBadge } from "../TechnologyBadge";
import TypographyH3 from "../TypographyH3";
/* eslint-disable react/react-in-jsx-scope */
export const SectionService = () => {
    const { content } = useLanguage();
    // const variants = ["default", "secondary", "lime", "amber"]
    const desc = content();
    return (<AnimateDiv><SectionWithTitle title={desc.titleItem.service} id="sectionService">
        <div className="grid grid-cols-1 text-center  md:grid-cols-2">
            <div className="rounded-lg p-4 md:border-r-8 md:border-solid md:border-secondary ">
                <TypographyH3 variant="accent">Hard Skills</TypographyH3>
                <br />
                {desc.serviceInfo.hardSkill.map((elt, key) => {
                    return (<TechnologyBadge key={key} num={key} text={elt} ></TechnologyBadge>)
                }
                )}
            </div>
            <div className="p-4">
                <TypographyH3 variant="accent" className="text-center">Soft Skills</TypographyH3>
                <br />
                {desc.serviceInfo.softSkill.map((elt, key) => {
                    return (<TechnologyBadge key={key} num={key} text={elt} ></TechnologyBadge>)
                }
                )}
            </div>
        </div>


    </SectionWithTitle>
    </AnimateDiv>)
}

// const BadgeIcon=(id:number)=>{
//     const icons=[
//         <Diamond className="pr-1"/>, <Disc className="pr-1" />,<Bot className="pr-1"/>,<Octagon className="pr-1"/>
//     ]
//     return icons[id%4];
// }