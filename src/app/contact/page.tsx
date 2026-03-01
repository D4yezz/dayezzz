"use client";
import Navbar from "@/components/layout/navbar";
import ContactHero from "@/components/views/contact/hero";
import DirectContact from "@/components/views/contact/direct-contact";
import Availability from "@/components/views/contact/availability";
import WhyWorkWithMe from "@/components/views/contact/why-work-with-me";
import LocationTimezone from "@/components/views/contact/location";
// import CallToAction from "@/components/views/cta";
import Footer from "@/components/views/footer";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen text-gray-300 bg-zinc-800">
      <Navbar welcome={false} />
      <ContactHero />
      <DirectContact />
      <Availability />
      <WhyWorkWithMe />
      <LocationTimezone />
      {/* <CallToAction /> */}
      <Footer />
    </main>
  );
}
