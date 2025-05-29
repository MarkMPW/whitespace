import Content from "@/components/Content";
import Customise from "@/components/Customise";
import Extension from "@/components/Extension";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
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
    </section>
  );
}
