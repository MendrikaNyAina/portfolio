/* eslint-disable react/react-in-jsx-scope */

import { Header } from "./_components/Header";
import { SectionAbout } from "./_components/SectionAbout";
import { SectionExperience } from "./_components/SectionExperience";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header></Header>
      <main className="pt-20">

        <SectionAbout />
        <SectionExperience />
      </main>
    </div>
  );
}
