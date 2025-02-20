/* eslint-disable react/react-in-jsx-scope */

import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { SectionAbout } from "./_components/sections/SectionAbout";
import { SectionArchievement } from "./_components/sections/SectionArchievement";
import { SectionContact } from "./_components/sections/SectionContact";
import { SectionExperience } from "./_components/sections/SectionExperience";
import { SectionFormation } from "./_components/sections/SectionFormation";
import { SectionProject } from "./_components/sections/SectionProject";
import { SectionService } from "./_components/sections/SectionService";

export default async function Home() {
  await new Promise((resolve)=>setTimeout(resolve, 2000));
  return (
    <div className={`bg-gradient-to-b from-background1 to-background2 bg-cover bg-no-repeat font-jost`}>

    <div className="relative min-h-screen">
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
  );
}
