/* eslint-disable react/react-in-jsx-scope */
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { MousePointer2 } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimateDiv } from "../AnimateDiv";
import { Frame } from "../Frame";
import { Section } from "../Section";
import TypographyH1 from "../TypographyH1";
import TypographyH2 from "../TypographyH2";

export const SectionAbout = () => {
    const { theme } = useTheme();
    const { content } = useLanguage();

    const pic1 = theme !== 'dark'
        ? { src: "/img/picprofil1_light.png", alt: "Pic1 light" } 
        : { src: "/img/picprofil1_dark.png", alt: "Pic1 dark" };

    const desc = content();
    
    const handleDownload=()=>{

        window.open(desc.cvPath, "_blank");
    }
    return (
        <AnimateDiv>
        <Section className=" mb-28 grid grid-cols-2 items-center justify-center pt-7 " id="sectionAbout">
            <div className="relative min-h-[510px]" >
                <TypographyH1 className="pl-10 pt-10 leading-[0.65]">
                    <span className="block">{desc.lastname} </span>
                    <span className="block">{desc.name} </span>
                </TypographyH1>
                <img src={pic1.src} alt={pic1.alt} className="absolute bottom-[-80px] right-0 h-[350px]" />
                <TypographyH2 className="relative pl-10 pt-16 font-medium leading-[1]">
                    <span className="block">{desc.jobTitles[0]} </span>
                    <span className="block">{desc.jobTitles[1]} </span>
                </TypographyH2>
                
                <Frame className=" absolute bottom-0 left-0 border-b-8 border-l-8"></Frame>
            </div>
            <div className="relative min-h-[510px]">
                <Frame className=" absolute right-0 top-0  border-r-8 border-t-8"></Frame>
                <p className="p-7 pt-10">{desc.descriptiveText} </p>
                <div className=" flex justify-end pr-7">                  
                    <div className="relative rounded-lg border-4 border-solid border-primary p-2">
                        <Button variant="secondary" onClick={handleDownload}>{desc.downloadCV} </Button>
                        {/* <RainbowButton>{desc.downloadCV}</RainbowButton> */}
                        <MousePointer2 className="absolute bottom-0 right-0 fill-background2 text-accent-foreground"></MousePointer2>
                    </div>
                    
                </div>
            </div>
        </Section>
        </AnimateDiv>
    )
}
