import Hero from "../components/home/Hero";
import ServiceTimes from "../components/home/ServiceTimes";
import AboutSection from "../components/home/AboutSection";
import MinistriesSection from "../components/home/MinistriesSection";
import PastorsSection from "../components/home/PastorsSection";
import MessagesSection from "../components/home/MessagesSection";
import PrayerCta from "../components/home/PrayerCta";
import GallerySection from "../components/home/GallerySection";
import LocationSection from "../components/home/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTimes />
      <AboutSection />
      <MinistriesSection />
      <PastorsSection />
      <MessagesSection />
      <GallerySection />
      <PrayerCta />
      <LocationSection />
    </>
  );
}
