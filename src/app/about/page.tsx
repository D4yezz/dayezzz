"use client";
import Navbar from "@/components/layout/navbar";
import AboutHero from "@/components/views/about/hero";
import ShortIntro from "@/components/views/about/short-intro";
import SkillsExpertise from "@/components/views/about/skills-expertise";
// import Certificates from "@/components/views/about/certificates";
// import Awards from "@/components/views/about/awards";
import Footer from "@/components/views/footer";
import Experiences from "@/components/views/about/experiences";
import CallToAction from "@/components/views/cta";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen text-gray-300 bg-zinc-800">
      <Navbar welcome={false} />
      <AboutHero />
      <ShortIntro />
      <SkillsExpertise />
      <Experiences />
      {/* <Certificates />
      <Awards /> */}
      <CallToAction />
      <Footer />
    </main>
  );
}
