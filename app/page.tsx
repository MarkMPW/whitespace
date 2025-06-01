import BarLayout from "@/components/BarLayout";
import Content from "@/components/Content";
import Customise from "@/components/Customise";
import DataSection from "@/components/DataSection";
import Extension from "@/components/Extension";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import WorkManagement from "@/components/WorkManagement";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <Content />
      <WorkManagement />
      <Extension />
      <Customise />
      <Pricing />
      <BarLayout />
      <DataSection />
    </section>
  );
}
