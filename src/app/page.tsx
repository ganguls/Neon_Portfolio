"use client";

import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import useGSAPAnimations from "@/hooks/useGSAPAnimations";

const WebGLScene = dynamic(() => import("@/components/WebGLScene"), {
  ssr: false,
});

export default function Home() {
  useGSAPAnimations();

  return (
    <>
      <WebGLScene />
      <CustomCursor />
      <Preloader />
      <main className="main-content">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <PortfolioSection />
        <ExperienceSection />
        <BlogsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
