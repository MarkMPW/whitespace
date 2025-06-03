import BarLayout from "@/components/BarLayout";
import ClientSection from "@/components/ClientSection";
import Content from "@/components/Content";
import Customise from "@/components/Customise";
import DataSection from "@/components/DataSection";
import Extension from "@/components/Extension";
import FavoriteAppSection from "@/components/FavoriteAppSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Sponsors from "@/components/Sponsors";
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
      <Sponsors />
      <FavoriteAppSection />
      <ClientSection />
      <FooterSection />
    </section>
  );
}
