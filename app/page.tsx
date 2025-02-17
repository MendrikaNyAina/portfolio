/* eslint-disable react/react-in-jsx-scope */
 

import { Header } from "./_components/Header";
import { SectionAbout } from "./_components/sections/SectionAbout";
import { SectionExperience } from "./_components/sections/SectionExperience";
import { SectionFormation } from "./_components/sections/SectionFormation";
import { SectionProject } from "./_components/sections/SectionProject";
import { SectionService } from "./_components/sections/SectionService";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header></Header>
      <main className="pt-20">

        <SectionAbout />
        <SectionExperience />
        <SectionProject />
        <SectionService />
        <SectionFormation />
      </main>
    </div>
  );
}
