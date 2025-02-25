/* eslint-disable react/react-in-jsx-scope */
"use client"
import { LanguageProvider } from "@/context/LanguageContext";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SectionAbout } from "../sections/SectionAbout";
import { SectionArchievement } from "../sections/SectionArchievement";
import { SectionContact } from "../sections/SectionContact";
import { SectionExperience } from "../sections/SectionExperience";
import { SectionFormation } from "../sections/SectionFormation";
import { SectionProject } from "../sections/SectionProject";
import { SectionService } from "../sections/SectionService";


export default function Home() {

    return (
        <LanguageProvider>
            <div className={`bg-gradient-to-b from-background1 to-background2 bg-cover bg-no-repeat font-jost`}>

                <div className="relative min-h-screen scroll-smooth">
                    <Header></Header>
                    <main className="pt-20">

                        <SectionAbout />
                        <SectionExperience />
                        <SectionProject />
                        <SectionService />
                        <SectionFormation />
                        <SectionArchievement />
                        <SectionContact />
                        <Footer />
                    </main>
                </div>
            </div>
        </LanguageProvider>
    );
}
