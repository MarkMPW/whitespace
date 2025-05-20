import Content from "@/components/Content";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <Content />
    </section>
  );
}
