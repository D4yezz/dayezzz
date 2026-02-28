"use client";
import Navbar from "@/components/layout/navbar";
import HeaderProject from "@/components/layout/project/header";
import SeparatorLinear from "@/components/layout/SeparatorSection/separatorLinear";
import MoreProject from "@/components/views/all-projects/more-project";
import Project from "@/components/views/all-projects/project";
import CallToAction from "@/components/views/cta";
import Footer from "@/components/views/footer";

export default function ProjectPage() {
  return (
    <main className="relative w-full text-gray-300 bg-zinc-800">
      <Navbar />
      <HeaderProject />
      <SeparatorLinear />
      <Project />
      <SeparatorLinear />
      <MoreProject />
      <CallToAction />
      <Footer />
    </main>
  );
}
