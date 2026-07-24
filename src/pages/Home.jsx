import Hero from "../components/home/Hero";
import ServiceTimes from "../components/home/ServiceTimes";
import AboutSection from "../components/home/AboutSection";
import MinistriesSection from "../components/home/MinistriesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTimes />
      <AboutSection />
      <MinistriesSection />
    </>
  );
}