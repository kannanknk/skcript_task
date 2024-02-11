import AppFooter from "@/components/home/AppFooter";
import AppHeader from "@/components/home/AppHeader";
import AppNavBar from "@/components/home/AppNavBar";
import ApplyCardSection from "../components/home/body_section/ApplyCardSection";
import SimplicitySection from "../components/home/body_section/SimplicitySection";
import TileFlipSection from "../components/home/body_section/TileFlipSection";
import RouterSection from "@/components/home/body_section/RouterSection";
import RouterCardSection from "@/components/home/body_section/RouterCardSection";
import TiltTemplate from "@/components/home/body_section/TileTemplate";

export default function Home() {
  return (
    <main className="flex flex-col">
      <AppHeader />
      <AppNavBar />
      <div>
        <ApplyCardSection />
        <SimplicitySection />
        <TileFlipSection />
        <RouterSection />
        <RouterCardSection />
      </div>
      <AppFooter />
    </main>
  );
}
